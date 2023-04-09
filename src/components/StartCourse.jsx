import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './header';

function StartCourse() {

    const thumbnail = sessionStorage.getItem('Thumbnail')
    const title = sessionStorage.getItem('Title')
    const videoIds = JSON.parse(sessionStorage.getItem('VideoIds'))
    const author = sessionStorage.getItem('Author')
    const [courses, setCourses] = useState([])

    function handleStartCourseClick() {
        const course = { thumbnail: thumbnail, title: title, videoCount: videoIds.length, Count: 1 };
      
        const storedCourses = sessionStorage.getItem("Courses");
      
        if (storedCourses) {
          const courses = JSON.parse(storedCourses);
          courses.push(course);

          sessionStorage.setItem("Courses", JSON.stringify(courses));
        } else {
          sessionStorage.setItem("Courses", JSON.stringify([course]));
        }
        setCourses((prevCourses) => [...prevCourses, course]);
      }
      

    return (
        <>

            <Header/>
            <div className='text-3xl font-base underline ml-10 mt-5 mb-5'>
            {title}
            </div>
            <div className='h-screen flex ml-32 '>
                <div className='p-5 block'>
                    <img className='h-96 w-full rounded-2xl' src={thumbnail} alt='thumbnail'/>
                </div>
                <div className='pt-12 pl-36 flex flex-col '>
                    <p className='text-xl pb-5 italic'>Created By <span className='text-3xl'><br/>{author}</span> </p>
                    <div className='flex'>
                    <div className='mt-1'>
                        <span className='text-3xl pb-0' >
                    <ion-icon name="videocam-sharp" ></ion-icon>
                    </span>
                    </div>
                    
                    <div className='px-4 text-3xl ' >
                    {videoIds.length} Videos
                    </div>
                    </div>
                    <div className='py-5'>
                    <Link to='/player'>
                    <button className=' bg-gradient-to-r from-purple-600 to-pink-600 hover:bg-gradient-to-r hover:from-cyan-700 hover:to-indigo-900 box-shadow hover:focus:shadow-none rounded-full text-white text-2xl py-4 px-6' onClick={handleStartCourseClick}>
                        Start Course
                        </button>
                    
                    </Link>
                    </div>
                </div >
            </div>
            
        </>
    )
}



export default StartCourse