import React, { useEffect, useState } from 'react';
import {auth,provider} from "./config";
import { signInWithPopup } from '@firebase/auth';

function Login() {

  const [value,setValue] = useState('')

  const handleClick = () => {
      signInWithPopup(auth,provider).then((data) => {
        setValue(data.user.email)
        localStorage.setItem("email",data.user.email)
      })
  }

  const logout = () => {
    localStorage.removeItem('email')
    setValue('')
  }

  useEffect(() => {
    setValue(localStorage.getItem('email'))
  })

  return (
    <>
        {value?<div>
          <button className=' bg-indigo-600 text-white font-medium py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500' onClick={logout}>Logout</button>
        </div>:
        <button className=' bg-indigo-600 text-white font-medium py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500' onClick={handleClick}> 
          Sign In with Google
        </button>
        } 
    </>
  )
}

export default Login