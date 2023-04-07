import React from 'react'
import { Link } from 'react-router-dom'

function StartCourse() {

    const thumbnail = sessionStorage.getItem('Thumbnail')
    const title = sessionStorage.getItem('Title')
    const videoIds = JSON.parse(sessionStorage.getItem('VideoIds'))
    const author = sessionStorage.getItem('Author')
    



    return (
        <>
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
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' >
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