import Link from 'next/link'

const Header = ({ ...props }) => {
  return <header {...props}>
    <nav id="header" className="fixed w-full z-30 top-0 text-white">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center">
        <Link href="/"><a className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="/">
            
            <svg  className="h-8 fill-current inline" viewBox="0 0 320 110" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M34.513 43.2C22.033 43.2 15.793 52.32 15.793 70.56C15.793 79.776 17.425 86.64 20.689 91.152C24.049 95.664 28.657 97.92 34.513 97.92C39.601 97.92 43.969 96.24 47.617 92.88C51.361 89.52 53.233 85.68 53.233 81.36V59.76C53.233 55.44 51.361 51.6 47.617 48.24C43.969 44.88 39.601 43.2 34.513 43.2ZM30.913 109.44C22.177 109.44 14.929 105.936 9.16897 98.928C3.50497 91.92 0.672974 82.464 0.672974 70.56C0.672974 58.272 3.40897 48.72 8.88097 41.904C14.449 35.088 21.793 31.68 30.913 31.68C39.457 31.68 46.753 34.752 52.801 40.896C52.897 40.992 52.993 41.04 53.089 41.04C53.185 41.04 53.233 40.992 53.233 40.896V7.48801C53.233 5.37601 53.953 3.60001 55.393 2.16001C56.929 0.720002 58.753 0 60.865 0C62.977 0 64.753 0.720002 66.193 2.16001C67.633 3.60001 68.353 5.37601 68.353 7.48801V100.944C68.353 102.864 67.633 104.544 66.193 105.984C64.849 107.328 63.217 108 61.297 108C59.377 108 57.697 107.328 56.257 105.984C54.913 104.544 54.193 102.864 54.097 100.944L53.953 98.784C53.953 98.688 50.096 105.5 50 105.5C50.096 105.404 49.904 105.5 50 105.5C46.448 109.436 46.465 105.504 43.009 107.136C39.553 108.672 35.521 109.44 30.913 109.44Z" fill="#FE3745"/>
              <path d="M139.902 70.56C139.902 52.32 133.278 43.2 120.03 43.2C106.782 43.2 100.158 52.32 100.158 70.56C100.158 88.8 106.782 97.92 120.03 97.92C133.278 97.92 139.902 88.8 139.902 70.56ZM145.95 99.36C139.71 106.08 131.07 109.44 120.03 109.44C108.99 109.44 100.35 106.08 94.1098 99.36C87.8698 92.544 84.7498 82.944 84.7498 70.56C84.7498 58.176 87.8698 48.624 94.1098 41.904C100.35 35.088 108.99 31.68 120.03 31.68C131.07 31.68 139.71 35.088 145.95 41.904C152.19 48.624 155.31 58.176 155.31 70.56C155.31 82.944 152.19 92.544 145.95 99.36Z" fill="#FE3745"/>
              <path d="M184.031 105.84C182.591 107.28 180.815 108 178.703 108C176.591 108 174.767 107.28 173.231 105.84C171.791 104.4 171.071 102.624 171.071 100.512V40.176C171.071 38.256 171.743 36.624 173.087 35.28C174.527 33.84 176.207 33.12 178.127 33.12C180.047 33.12 181.679 33.84 183.023 35.28C184.463 36.624 185.231 38.256 185.327 40.176L185.471 42.336C185.471 42.432 185.519 42.48 185.615 42.48C185.711 42.48 185.807 42.432 185.903 42.336C192.719 35.232 200.495 31.68 209.231 31.68C217.967 31.68 224.351 34.176 228.383 39.168C232.415 44.064 234.431 52.128 234.431 63.36V100.656C234.431 102.672 233.711 104.4 232.271 105.84C230.831 107.28 229.103 108 227.087 108C225.071 108 223.295 107.28 221.759 105.84C220.319 104.4 219.599 102.672 219.599 100.656V65.52C219.599 56.88 218.543 51.024 216.431 47.952C214.319 44.784 210.479 43.2 204.911 43.2C200.399 43.2 196.127 45.216 192.095 49.248C188.159 53.184 186.191 57.408 186.191 61.92V100.512C186.191 102.624 185.471 104.4 184.031 105.84Z" fill="#FE3745"/>
              <path d="M304.574 70.56C304.574 52.32 297.95 43.2 284.702 43.2C271.454 43.2 264.83 52.32 264.83 70.56C264.83 88.8 271.454 97.92 284.702 97.92C297.95 97.92 304.574 88.8 304.574 70.56ZM310.622 99.36C304.382 106.08 295.742 109.44 284.702 109.44C273.662 109.44 265.022 106.08 258.782 99.36C252.542 92.544 249.422 82.944 249.422 70.56C249.422 58.176 252.542 48.624 258.782 41.904C265.022 35.088 273.662 31.68 284.702 31.68C295.742 31.68 304.382 35.088 310.622 41.904C316.862 48.624 319.982 58.176 319.982 70.56C319.982 82.944 316.862 92.544 310.622 99.36Z" fill="#FE3745"/>
              <rect x="171" y="32" width="48" height="11" rx="5.5" fill="#FE3745"/>
            </svg>
          </a></Link>
        </div>
        <div className="block lg:hidden pr-4">
          <button id="nav-toggle" className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <Link href="/"><a className="inline-block py-2 px-4 text-black font-bold no-underline" href="/">Home</a></Link>
            </li>
            <li className="mr-3">
              <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">link</a>
            </li>
            <li className="mr-3">
              <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">link</a>
            </li>
          </ul>
          <Link href="/sign-in">
          <button
            id="navAction"
            className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            Join
          </button></Link>
        </div>
      </div>
      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
  </header>
}

export default Header
