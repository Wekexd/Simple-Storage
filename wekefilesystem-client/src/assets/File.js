import useRelativeTime from '@nkzw/use-relative-time';

export default function File(props) {
    const timeInMilliseconds = new Date(props.createdAt).getTime();
    const timeAgo = useRelativeTime(timeInMilliseconds);
    return (
        <>
            <div className="bg-gray-900 rounded-lg p-4 flex flex-col gap-3 hover:cursor-pointer">
                <div className="flex items-center gap-3">
                    {props.type === 'folder' ?<FolderIcon className="h-8 w-8 text-red-500" />:<FileIcon className="h-8 w-8 text-red-500" />}
                    <div className="flex-1">
                        <h3 className="font-medium truncate">{props.name}</h3>
                        <p className="text-sm text-gray-400">{timeAgo}, {formatBytes(props.size)}</p>
                    </div>
                    <button size="icon" variant="ghost">
                        <MoreVerticalIcon className="h-5 w-5 text-white" />
                        <span className="sr-only">More</span>
                    </button>
                </div>
            </div>
        </>
    )
}



function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) {
        return '0 Bytes';
    }

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}


function FolderIcon(props) {
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
        <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
      </svg>
    )
  }
  
  function FileIcon(props) {
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
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
    )
  }

  
function MoreVerticalIcon(props) {
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
        <circle cx="12" cy="12" r="1" />
        <circle cx="12" cy="5" r="1" />
        <circle cx="12" cy="19" r="1" />
      </svg>
    )
  }