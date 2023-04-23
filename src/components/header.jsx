import React, { useState } from 'react';
import Login from '../components/Auth/Login';
import { Link } from 'react-router-dom';


function Header() {

    let [open, setOpen] = useState(false);
    

  return (
    <>  
        
        <div className='shadow-md w-full top-0 left-0 z-50  right-0 bg-gradient-to-r from-bele2 to-bele1'>
            <div className='md:flex items-center justify-between py-4 md:px-10 px-7'>
            <Link to='/'>
            <div className='font-medium text-2xl cursor-pointer flex items-center text-gray-800 '>
                <span className='text-3xl text-indigo-600 mr-1 pt-2 '>
                <img className="h-14 w-14" src='images/2.png' />
                </span>
                <span className='pt-3 text-white'>CourseVerse</span>
                
            </div>
            </Link>
            <div onClick={()=>setOpen(!open)}>
            <span className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                <ion-icon name={open ? 'close':'menu'}></ion-icon>
                </span>
            </div>
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto pl-10 transition-all duration-100 ease-in ${open ? 'top-19 opacity-100':'top-[-490px]'} md:opacity-100 opacity-0`}>
                <Link to='/import'>
                <li className='md:ml-8 text-xl md:my-0 my-7'><p className='text-white hover:text-gray-400 duration-500 uppercase'><span>Your Courses</span></p></li>
                </Link>
                

                <Login/>
            </ul>
            </div>
        </div>
       
    </>
  )
}

export default Header