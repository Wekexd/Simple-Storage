import File from './assets/File.js';
import NoFile from './assets/NoFile.js';
import LoadingFile from './assets/LoadingFile.js';
import { useEffect, useState } from 'react';
import axios from 'axios';

// %2F -> /

function App() {
  const [files, setFiles] = useState([]);
  const [openfile, setopenfile] = useState(false);
  const [openfiledata, setopenfiledata] = useState(null);
  const [openfilename, setopenfilename] = useState("");
  const [openfileext, setopenfileext] = useState("");
  const [path, setPath] = useState("null");
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://127.0.0.1:1337/api/getfoldercontent/' + path);
      const data = await response.json();
      setFiles(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const constFetchData = async () => {
    if(loading === true || openfile === true) {
      return;
    }
    try {
      const response = await fetch('http://127.0.0.1:1337/api/getfoldercontent/' + path);
      const data = await response.json();
      setFiles(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const openTXTFile = async (filename) => {
    try {
      setopenfile(true);
      setopenfiledata(null);
      setopenfilename(filename);
      var apath = "";
      if(path === "null") {
        apath = filename;
      } else {
        apath = path + "%2F" + filename;
      }
      
      const response = await fetch('http://127.0.0.1:1337/api/openfile/' + apath);
      const data = await response.text();
      setopenfile(true);
      setopenfileext("txt");
      setopenfiledata(data);
    } catch (error) {
      console.error('Error opening file data:', error);
      setopenfile(false);
      setopenfiledata(null);
      setopenfilename("");
      setopenfileext("");
    }
  };

  const openImageFile = async (filename) => {
    try {
      setopenfile(true);
      setopenfiledata(null);
      setopenfilename(filename);
      var apath = "";
      if(path === "null") {
        apath = filename;
      } else {
        apath = path + "%2F" + filename;
      }
      
      const response = await fetch('http://127.0.0.1:1337/api/openfileimage/' + apath);
      const data = await response.text();
      setopenfile(true);
      setopenfileext("image");
      setopenfiledata(data);
    } catch (error) {
      console.error('Error opening file data:', error);
      setopenfile(false);
      setopenfiledata(null);
      setopenfilename("");
      setopenfileext("");
    }
  };

  

  useEffect(() => {
    fetchData();
  }, [path]);
  
  const handlePathChange = (newPath, fileext, filetype) => {
    if(filetype === "folder") {
      if(newPath === "..") {
        if(path === "null") {
          return;
        }
        let newPath = path.split("%2F");
        newPath.pop();
        newPath = newPath.join("%2F");
        if(newPath.length === 0) {
          newPath = "null";
        }
        setPath(newPath);
        return;
      } else {
        if(path === "null") {
          setPath(newPath);
        } else {
          setPath(path + "%2F" + newPath);
        }
      }
    } else {
      if(fileext != null) {
        if(fileext !== newPath) {
          if(fileext === "txt") {
            openTXTFile(newPath);
          } else if(fileext === "jfif" || fileext === "jpg") {
            openImageFile(newPath);
          }
          return;
        }
      }
    }
  };

  const handleDragOver = (e) => {
    if(e.target.id !== "dropzone") {
      return;
    }
    e.preventDefault();
    e.target.classList.remove("opacity-0");
    e.target.classList.add("opacity-90");
    e.target.classList.add("z-50");
  };
  
  const handleDrop = async (e) => {
    if(e.target.id !== "dropzone") {
      return;
    }
    e.preventDefault();
    e.target.classList.remove("opacity-90");
    e.target.classList.remove("z-50");
    e.target.classList.add("opacity-0");

    const formData = new FormData();
    formData.append('file', e.dataTransfer.files[0]);
    try {
      const response = await axios.post('http://127.0.0.1:1337/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };
  
  const handleDragLeave = (e) => {
    if(e.target.id !== "dropzone") {
      return;
    }
    e.preventDefault();
    e.target.classList.remove("opacity-90");
    e.target.classList.remove("z-50");
    e.target.classList.add("opacity-0");
  };

  if(loading === true) {
    return (
      <>
      <header className="flex h-16 items-center justify-between px-6">
        <div className="text-lg font-semibold text-gray-50">Weke Storage</div>
        <div className="flex items-center gap-4">
          <button className="text-gray-50 hover:bg-gray-800" size="icon" variant="ghost">
            <SearchIcon className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </button>
          <button className="text-gray-50 hover:bg-gray-800" size="icon" variant="ghost">
            <SettingsIcon className="h-5 w-5" />
            <span className="sr-only">Settings</span>
          </button>
        </div>
      </header>
      <div className='w-full flex flex-row-reverse pr-6 font-bold pl-6 flex-wrap text-wrap overflow-hidden whitespace-pre-wrap break-words'>
        <p className='overflow-hidden p-2 pr-0'>{path==="null" ? "Home" : path.replaceAll("%2F", " > ")}</p>
      </div>
      <main className="flex-1 overflow-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <LoadingFile></LoadingFile>
        </div>
      </main>
    </>
    );
  }

  if(openfile === true) {
    if(openfileext === "txt") {
      return (
        <>
        <header className="flex h-16 items-center justify-between px-6">
          <div className="text-lg font-semibold text-gray-50">Weke Storage</div>
          <div className="flex items-center gap-4">
            <button className="text-gray-50 hover:bg-gray-800" size="icon" variant="ghost">
              <SearchIcon className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </button>
            <button className="text-gray-50 hover:bg-gray-800" size="icon" variant="ghost">
              <SettingsIcon className="h-5 w-5" />
              <span className="sr-only">Settings</span>
            </button>
          </div>
        </header>
        <div className='w-full flex flex-row-reverse pr-6 font-bold pl-6 flex-wrap text-wrap overflow-hidden whitespace-pre-wrap break-words items-baseline justify-between'>
          <p className='overflow-hidden'>{openfilename}</p>
          <button onClick={() => setopenfile(false)} className="bg-gray-900 rounded-lg flex flex-col gap-3 hover:cursor-pointer text-white p-2 pr-4 pl-4">Close</button>
        </div>
        <main className="flex-1 overflow-auto p-6">
            <div className="bg-gray-900 rounded-lg p-4 flex flex-col gap-3 hover:cursor-pointer w-full">
              <h3 className="font-medium truncate text-wrap flex-wrap">{openfiledata}</h3>
          </div>
        </main>
      </>
      );
    } else if(openfileext === "image") {
        return (
          <>
          <header className="flex h-16 items-center justify-between px-6">
            <div className="text-lg font-semibold text-gray-50">Weke Storage</div>
            <div className="flex items-center gap-4">
              <button className="text-gray-50 hover:bg-gray-800" size="icon" variant="ghost">
                <SearchIcon className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </button>
              <button className="text-gray-50 hover:bg-gray-800" size="icon" variant="ghost">
                <SettingsIcon className="h-5 w-5" />
                <span className="sr-only">Settings</span>
              </button>
            </div>
          </header>
          <div className='w-full flex flex-row-reverse pr-6 font-bold pl-6 flex-wrap text-wrap overflow-hidden whitespace-pre-wrap break-words items-baseline justify-between'>
            <p className='overflow-hidden'>{openfilename}</p>
            <button onClick={() => setopenfile(false)} className="bg-gray-900 rounded-lg flex flex-col gap-3 hover:cursor-pointer text-white p-2 pr-4 pl-4">Close</button>
          </div>
          <main className="flex-1 overflow-auto p-6">
              <div className="bg-gray-900 rounded-lg p-4 flex flex-col gap-3 hover:cursor-pointer w-full">
                <img src={"data:image/jpeg;base64," + openfiledata} className='w-full bg-no-repeat bg-contain' alt='image'></img>
            </div>
          </main>
        </>
        );
      }
    }

  return (
    <>
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onDragLeave={handleDragLeave}
      className='bg-[rgb(20,20,20)] h-full w-full fixed transition-all opacity-0 flex items-center justify-center flex-col pointer-events-auto -z-10'
      id='dropzone'
    >
      <UploadIcon className='pointer-events-none text-white'></UploadIcon>
      <h1 className='pointer-events-none'>Drop your files here :)</h1>
      <form id='uploadForm'>
        <input
          type='file'
          multiple
          className='pointer-events-none last-of-type:hidden'
          id="fileinput"
        />
      </form>
    </div>
    <header className="flex h-16 items-center justify-between px-6">
      <div className="text-lg font-semibold text-gray-50">Weke Storage</div>
      <div className="flex items-center gap-4">
        <button className="text-gray-50 hover:bg-gray-800" size="icon" variant="ghost">
          <SearchIcon className="h-5 w-5" />
          <span className="sr-only">Search</span>
        </button>
        <button className="text-gray-50 hover:bg-gray-800" size="icon" variant="ghost">
          <SettingsIcon className="h-5 w-5" />
          <span className="sr-only">Settings</span>
        </button>
      </div>
    </header>
    <div className='w-full flex flex-row-reverse pr-6 font-bold pl-6 flex-wrap text-wrap overflow-hidden whitespace-pre-wrap break-words'>
      <p className='overflow-hidden p-2 pr-0'>{path==="null" ? "Home" : path.replaceAll("%2F", " > ")}</p>
    </div>
    <main className="flex-1 overflow-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {path !== "null" ? 
          <div onClick={() => handlePathChange("..", null, "folder")}>
          <NoFile></NoFile>
          </div>
            : null}
          {files.map((file, index) => (
            <div onClick={() => handlePathChange(file.name, file.ext, file.type)}>
              <File name={file.name} createdAt={file.createdAt} size={file.size} type={file.type}></File>
            </div>
          ))}
      </div>
    </main>
    </>
  );
}

export default App;


function UploadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="150"
      height="150"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  )
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}

function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}