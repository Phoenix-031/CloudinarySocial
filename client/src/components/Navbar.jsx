import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbarComponent w-full h-max py-2 px-4 flex justify-between items-center mx-auto mt-4">
        <div className="logots font-sans font-bold text-lg text-gray-800">Image Social</div>
        <div className="navlinks flex justify-center items-center gap-8 text-lg text-gray-800 font-bold">
            <Link to='/upload'> Upload</Link>
            <Link to='/'> Gallery</Link>
        </div>
    </div>
  )
}

export default Navbar