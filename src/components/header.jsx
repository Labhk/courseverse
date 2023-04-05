import React, { useState } from 'react';


function Header() {

    let [open, setOpen] = useState(false);

  return (
    <>  
        
        <div className='shadow-md w-full fixed top-0 left-0'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
            <div className='font-medium text-2xl cursor-pointer flex items-centers text-gray-800'>
                <span className='text-3xl text-indigo-600 mr-1 pt-2 '>
                <img className="h-10 w-10" src='images/augmented-reality.png' />
                </span>
                <span className='pt-3 text-blue-700'>CourseVerse</span>
            </div>
            <div onClick={()=>setOpen(!open)}>
            <span className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                <ion-icon name={open ? 'close':'menu'}></ion-icon>
                </span>
            </div>
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto pl-10 transition-all duration-100 ease-in ${open ? 'top-19 opacity-100':'top-[-490px]'} md:opacity-100 opacity-0`}>
                
                <li className='md:ml-8 text-xl md:my-0 my-7'><a href='0#' className='text-gray-800 hover:text-gray-400 duration-500 uppercase'><li>HOME</li></a></li>
                <li className='md:ml-8 text-xl md:my-0 my-7'><a href='0#' className='text-gray-800 hover:text-gray-400 duration-500 uppercase'><li>BENEFITS</li></a></li>
                <li className='md:ml-8 text-xl md:my-0 my-7'><a href='0#' className='text-gray-800 hover:text-gray-400 duration-500 uppercase'><li>TESTIMONIALS</li></a></li>
                <li className='md:ml-8 text-xl md:my-0 my-7'><a href='0#' className='text-gray-800 hover:text-gray-400 duration-500 uppercase'><li>BLOGS</li></a></li>
                <li className='md:ml-8 text-xl md:my-0 my-7'><a href='0#' className='text-gray-800 hover:text-gray-400 duration-500 uppercase'><li>CONTACT</li></a></li>

                <button className=' bg-indigo-600 text-white font-medium py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500 '>
                    Login
                </button>
                <button className=' bg-indigo-600 text-white font-medium py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500 '>
                    Sign Up
                </button>
            </ul>
            </div>
        </div>
       
    </>
  )
}

export default Header