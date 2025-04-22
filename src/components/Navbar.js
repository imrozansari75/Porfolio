import React from 'react'

function Navbar() {
    return (
        <div className="fixed w-full top-0 left-0 py-5 px-20 flex justify-between items-center bg-white shadow-sm z-50">   {/* Logo */}
            <div className="text-2xl md:text-3xl font-bold text-gray-800 z-10">
                <h1 className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Portfolio
                </h1>
            </div>

            {/* Centered Navigation */}
            <ul className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-6 font-medium text-gray-600">
                <li className="hover:text-blue-500 transition-colors cursor-pointer">Home</li>
                <li className="hover:text-blue-500 transition-colors cursor-pointer">About</li>
                <li className="hover:text-blue-500 transition-colors cursor-pointer">Skills</li>
                <li className="hover:text-blue-500 transition-colors cursor-pointer">Projects</li>
                <li className="hover:text-blue-500 transition-colors cursor-pointer">Contact</li>
            </ul>

            {/* Right-aligned Buttons */}
            <div className='hidden md:flex gap-4 z-10'>
                <button className="px-5 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-600 font-medium rounded-lg hover:shadow-md transition-all border border-blue-100 hover:border-blue-200">
                    Download CV
                </button>
                <button className="px-5 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-600 font-medium rounded-lg hover:shadow-md transition-all border border-blue-100 hover:border-blue-200">
                    Hire Me
                </button>
            </div>
        </div>
    )
}

export default Navbar