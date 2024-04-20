const express = require('express');
const fs = require('fs');
const cors = require('cors');
const multer = require('multer');
const folderPath = 'files';

const app = express();

// multer conf
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'files/');
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.originalname);
//     },
// });

var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, 'files/');
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

app.get('/api/getfoldercontent/:path', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin','*');

    var path = req.params.path;
    var folderPathWithQuery = `${folderPath}`;
    if(path == null || path === "null") {
        path = "";
    } else {
        var folderPathWithQuery = `${folderPath}/${path}`;
    }
    fs.readdir(folderPathWithQuery, (err, files) => {
        if (err) {
            res.status(500).send('Internal Server Error');
        } else {
            const filePromises = files.map((file) => {
                const filePath = `${folderPathWithQuery}/${file}`;
                if(filePath != null && filePath != "" && filePath != "/") {
                    return new Promise((resolve, reject) => {
                        fs.stat(filePath, (err, stats) => {
                            if (err) {
                                reject(err);
                            } else {
                                const fileDetails = {
                                    name: file,
                                    ext: file.split('.').pop(),
                                    size: stats.size,
                                    createdAt: stats.birthtime,
                                    type: stats.isDirectory() ? 'folder' : 'file',
                                    path: filePath,
                                };
                                if(fileDetails.type == 'folder') {
                                    fs.readdir(filePath, (err, files) => {
                                        if (err) {
                                            reject(err);
                                        } else {
                                            const fileCount = files.length;
                                            fileDetails.fileCount = fileCount;
                                            resolve(fileDetails);
                                        }
                                    });
                                } else {
                                    resolve(fileDetails);
                                }
                            }
                        });
                    });
                }
            });

            Promise.all(filePromises)
                .then((fileData) => {
                    res.json(fileData);
                })
                .catch((err) => {
                    res.status(500).send('Internal Server Error');
                });
        }
    });
});

app.post('/api/upload/', upload.array('file'), (req, res) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    if (req.files.length === 0) {
        return res.status(400).json({ error: 'No file uploaded' });
    }
    res.status(200);
});

app.get('/api/openfile/:path', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin','*');

    var path = req.params.path;
    var folderPathWithQuery = `${folderPath}`;
    if(path == null || path === "null") {
        path = "";
    } else {
        var folderPathWithQuery = `${folderPath}/${path}`;
    }
    fs.readFile(folderPathWithQuery, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Internal Server Error');
        } else {
            res.status(200).send(data);
        }
    });
});

app.get('/api/openfileimage/:path', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin','*');

    var path = req.params.path;
    var folderPathWithQuery = `${folderPath}`;
    if(path == null || path === "null") {
        path = "";
    } else {
        var folderPathWithQuery = `${folderPath}/${path}`;
    }
    const base64Data = fs.readFileSync(folderPathWithQuery, { encoding: 'base64' });
    res.status(200).send(base64Data);
});

app.use((req, res) => {
    res.status(404).send('Not found');
});


const port = 1337;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});