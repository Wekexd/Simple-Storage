export default function File() {
    return (
        <>
            <div className="bg-gray-900 rounded-lg p-4 flex flex-col gap-3 hover:cursor-pointer h-[76px] animate-pulse">
                <div className="flex items-center gap-3 w-full h-full">
                    <LoadingIcon className="h-8 w-8 text-red-500 animate-spin" />
                    <div className="flex-1">
                        <h3 className="font-medium truncate">Loading...</h3>
                        <p className="text-sm text-gray-400">It will take long time...</p>
                    </div>
                </div>
            </div>
        </>
    )
}

function LoadingIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 -1 26 29"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <g>
	<g>
		<circle cx="13.792" cy="3.082" r="3.082"/>
		<circle cx="13.792" cy="24.501" r="1.849"/>
		<circle cx="6.219" cy="6.218" r="2.774"/>
		<circle cx="21.365" cy="21.363" r="1.541"/>
		<circle cx="3.082" cy="13.792" r="2.465"/>
		<circle cx="24.501" cy="13.791" r="1.232"/>
		<path d="M4.694,19.84c-0.843,0.843-0.843,2.207,0,3.05c0.842,0.843,2.208,0.843,3.05,0c0.843-0.843,0.843-2.207,0-3.05
			C6.902,18.996,5.537,18.988,4.694,19.84z"/>
		<circle cx="21.364" cy="6.218" r="0.924"/>
	</g>
</g>
      </svg>
    )
  }
  