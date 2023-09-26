import React from 'react'

export const Navibar = () => {
  return (
    <div className='w-full items-center flex justify-center bg-red-200'>
    <nav className="bg-blue-500 rounded-2xl p-4 m-4 justify-between flex w-3/4">
        <div className="flex items-center justify-between bg-red-100 flex-1">
          <div className="text-white font-bold text-xl">My App</div>
          <div className="flex flex-row space-x-4">
            <a href="#" className="text-white hover:text-gray-300">Home</a>
            <a href="#" className="text-white hover:text-gray-300">About</a>
            <a href="#" className="text-white hover:text-gray-300">Services</a>
            <a href="#" className="text-white hover:text-gray-300">Contact</a>
          </div>
        </div>
    </nav>
    </div>
  )
}
