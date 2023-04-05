import React from 'react'
import Header from './header'
import { Link } from 'react-router-dom'
const Homebody = () => {
  return (
    <div>
      <Header />
      
      <div className="h-screen w-full flex">
        <div className="w-1/2  p-20 mt-40">

          <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Your One-Stop Learning Solution.</h1>
          <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Welcome to CourseVerse, the platform that lets you learn anything with ease. Whether you want to improve your web development skills, cook like a chef, or learn a new language, we've got you covered. Our distraction-free environment lets you import any playlist and watch it without interruptions, so you can learn more efficiently and effectively. Sign up now to discover a new world of learning and unleash your full potential!.</p>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Get Started</button>  

        </div>

        <div className=" w-1/2 p-20 mt-44 ">
          <img className="  "src='images/19197877.jpg' />
        </div>
     
      </div>

      <div className="h-screen w-full flex">

        <div className=" w-1/2 p-20 mt-44 ">
            <img className="  "src='images/19197877.jpg' />
          </div>
          
        <div className="w-1/2  p-20 mt-40">
          <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Your One-Stop Learning Solution.</h1>
          <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Welcome to CourseVerse, the platform that lets you learn anything with ease. Whether you want to improve your web development skills, cook like a chef, or learn a new language, we've got you covered. Our distraction-free environment lets you import any playlist and watch it without interruptions, so you can learn more efficiently and effectively. Sign up now to discover a new world of learning and unleash your full potential!.</p>
          <Link to="/import">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Get Started</button> 
          </Link>
                 
        </div>
        
      </div>
      
      
    </div>
  )
}

export default Homebody
