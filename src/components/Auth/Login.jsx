import React, { useEffect, useState } from 'react';
import {auth,provider} from "./config";
import { signInWithPopup } from '@firebase/auth';
import { useNavigate } from 'react-router';

function Login() {

  const [value,setValue] = useState('')
  const navigate = useNavigate();

  const handleClick = () => {
      signInWithPopup(auth,provider).then((data) => {
        setValue(data.user.email)
        localStorage.setItem("email",data.user.email)
      })
  }

  const logout = () => {
    localStorage.removeItem('email')
    setValue('')
    navigate('/');
  }

  useEffect(() => {
    setValue(localStorage.getItem('email'))
  })

  return (
    <>
        {value?<div>
          <button className=' bg-white hover:bg-gradient-to-r hover:from-cyan-700 hover:to-indigo-900 box-shadow hover:focus:shadow-none rounded-full text-white font-medium py-2 px-6 pb-3   md:ml-8 hover:bg-indigo-400 duration-500' onClick={logout}>Logout</button>
        </div>:
        <button className=' text-base bg-white box-shadow hover:focus:shadow-none text-btext font-medium py-2 px-6 rounded-full md:ml-8' onClick={handleClick}> 
          Sign In with Google
        </button>
        } 
    </>
  )
}

export default Login