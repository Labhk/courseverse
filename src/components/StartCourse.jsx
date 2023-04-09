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
      
        // Get the current value of the `Courses` key from session storage
        const storedCourses = sessionStorage.getItem("Courses");
      
        if (storedCourses) {
          // If `Courses` key exists in session storage, parse its value and add the new course to the end
          const courses = JSON.parse(storedCourses);
          courses.push(course);
      
          // Update the `Courses` key in session storage with the updated array
          sessionStorage.setItem("Courses", JSON.stringify(courses));
        } else {
          // If `Courses` key does not exist in session storage, create it with the new course as the first element
          sessionStorage.setItem("Courses", JSON.stringify([course]));
        }
      
        // Update the local `courses` state with the new course
        setCourses((prevCourses) => [...prevCourses, course]);
      }
      

    return (
        <>
            <Header/>
            <div className='text-4xl font-bold p-5'>
            {title}
            </div>
            <div className='flex'>
                <div className='p-10 block'>
                    <img src={thumbnail} alt='thumbnail'/>
                </div>
                <div className='p-10 '>
                    <p className='text-3xl pb-5'> By {author} </p>
                    <span className='pt-14 text-4xl ' >
                    <ion-icon name="videocam-sharp"></ion-icon>
                    </span>
                    <div className=' inline px-4 text-4xl ' >
                    {videoIds.length} Videos
                    </div>
                    <div className='p-10'>
                    <Link to='/player'>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleStartCourseClick}>
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