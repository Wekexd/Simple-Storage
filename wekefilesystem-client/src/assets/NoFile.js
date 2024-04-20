
export default function File() {
    return (
        <>
            <div className="bg-gray-900 rounded-lg p-4 flex flex-col gap-3 hover:cursor-pointer h-[76px]">
                <div className="flex items-center gap-3 w-full h-full">
                    <NoFileIcon className="h-8 w-8 text-red-500" />
                    <div className="flex-1">
                        <h3 className="font-medium truncate">..</h3>
                  </div>
                </div>
            </div>
        </>
    )
}

function NoFileIcon(props) {
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
  