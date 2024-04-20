/**
 * v0 by Vercel.
 * @see https://v0.dev/t/3A9K321yvni
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

export default function Component() {
  return (
    <div className="flex h-screen w-full flex-col">
      <header className="flex h-16 items-center justify-between bg-gray-950 px-6">
        <div className="text-lg font-semibold text-gray-50">Storage</div>
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
      <main className="flex-1 overflow-auto bg-gray-950 p-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          <div className="group relative flex h-32 cursor-pointer items-center justify-center rounded-lg border border-gray-800 bg-gray-900 p-4 transition-all hover:border-red-500 hover:bg-gray-800">
            <FolderIcon className="h-12 w-12 text-red-500 group-hover:text-red-400" />
            <div className="absolute bottom-2 left-2 text-sm font-medium text-gray-400 group-hover:text-gray-300">
              Documents
            </div>
          </div>
          <div className="group relative flex h-32 cursor-pointer items-center justify-center rounded-lg border border-gray-800 bg-gray-900 p-4 transition-all hover:border-red-500 hover:bg-gray-800">
            <FolderIcon className="h-12 w-12 text-red-500 group-hover:text-red-400" />
            <div className="absolute bottom-2 left-2 text-sm font-medium text-gray-400 group-hover:text-gray-300">
              Images
            </div>
          </div>
          <div className="group relative flex h-32 cursor-pointer items-center justify-center rounded-lg border border-gray-800 bg-gray-900 p-4 transition-all hover:border-red-500 hover:bg-gray-800">
            <FolderIcon className="h-12 w-12 text-red-500 group-hover:text-red-400" />
            <div className="absolute bottom-2 left-2 text-sm font-medium text-gray-400 group-hover:text-gray-300">
              Music
            </div>
          </div>
          <div className="group relative flex h-32 cursor-pointer items-center justify-center rounded-lg border border-gray-800 bg-gray-900 p-4 transition-all hover:border-red-500 hover:bg-gray-800">
            <FolderIcon className="h-12 w-12 text-red-500 group-hover:text-red-400" />
            <div className="absolute bottom-2 left-2 text-sm font-medium text-gray-400 group-hover:text-gray-300">
              Videos
            </div>
          </div>
          <div className="group relative flex h-32 cursor-pointer items-center justify-center rounded-lg border border-gray-800 bg-gray-900 p-4 transition-all hover:border-red-500 hover:bg-gray-800">
            <FileIcon className="h-12 w-12 text-red-500 group-hover:text-red-400" />
            <div className="absolute bottom-2 left-2 text-sm font-medium text-gray-400 group-hover:text-gray-300">
              file.pdf
            </div>
          </div>
          <div className="group relative flex h-32 cursor-pointer items-center justify-center rounded-lg border border-gray-800 bg-gray-900 p-4 transition-all hover:border-red-500 hover:bg-gray-800">
            <img
              alt="File thumbnail"
              className="h-12 w-12 rounded-lg object-cover"
              height={48}
              src="/placeholder.svg"
              style={{
                aspectRatio: "48/48",
                objectFit: "cover",
              }}
              width={48}
            />
            <div className="absolute bottom-2 left-2 text-sm font-medium text-gray-400 group-hover:text-gray-300">
              image.jpg
            </div>
          </div>
          <div className="group relative flex h-32 cursor-pointer items-center justify-center rounded-lg border border-gray-800 bg-gray-900 p-4 transition-all hover:border-red-500 hover:bg-gray-800">
            <FileIcon className="h-12 w-12 text-red-500 group-hover:text-red-400" />
            <div className="absolute bottom-2 left-2 text-sm font-medium text-gray-400 group-hover:text-gray-300">
              document.docx
            </div>
          </div>
          <div className="group relative flex h-32 cursor-pointer items-center justify-center rounded-lg border border-gray-800 bg-gray-900 p-4 transition-all hover:border-red-500 hover:bg-gray-800">
            <img
              alt="File thumbnail"
              className="h-12 w-12 rounded-lg object-cover"
              height={48}
              src="/placeholder.svg"
              style={{
                aspectRatio: "48/48",
                objectFit: "cover",
              }}
              width={48}
            />
            <div className="absolute bottom-2 left-2 text-sm font-medium text-gray-400 group-hover:text-gray-300">
              presentation.pptx
            </div>
          </div>
        </div>
      </main>
    </div>
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


// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required

// import { Archivo } from 'next/font/google'
// import { Archivo } from 'next/font/google'
// import './styles.css'

// const archivo = Archivo({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-archivo',
// })
// const archivo = Archivo({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-archivo',
// })

// export default function Layout({ children }) {
//   return (
//     <html lang="en">
//       <body className={archivo.variable + archivo.variable}>
//         {children}
//       </body>
//     </html>
//   )
// }