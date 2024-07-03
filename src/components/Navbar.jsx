import React from 'react'
import image1 from '../images/pokemon.png'

import { Link } from 'react-router-dom'

function Navbar() {
  return (
    

      <nav className="bg-white border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                  <img src={image1} className="h-12" alt={image1} />
              </Link>
              <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <Link to="/Pocket" className=" text-white ">Pocket</Link>
                    </li>
                </ul>
              </div>
          </div>
      </nav>

  )
}

export default Navbar
