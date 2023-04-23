import React, { useState, useEffect } from 'react';
import Explore from './Explore';
import AskDoubt from './AskDoubt';
import Header from './header';

function VideoPlayer() {
  const [mainVideoId, setMainVideoId] = useState('');
  const [sidebarVideoIds, setSidebarVideoIds] = useState([]);
  const titles = JSON.parse(sessionStorage.getItem('Titles'))

  useEffect(() => {
    const videoIds = JSON.parse(sessionStorage.getItem('VideoIds'));
    if (videoIds && videoIds.length > 0) {
      setMainVideoId(videoIds[0]);
      setSidebarVideoIds(videoIds);
    }
  }, []);

  const handleSideVideoClick = (videoId) => {
    const storedCourses = sessionStorage.getItem("Courses");

    if (storedCourses) {
      
      const courses = JSON.parse(storedCourses);
      const lastCourse = courses[courses.length - 1];
      lastCourse.videoCount += 1;
      lastCourse.Count += 1;

      sessionStorage.setItem("Courses", JSON.stringify(courses));
    }
    
    setMainVideoId(videoId);
    // window.location.reload();
  };

  return (
    <>
      <Header/>
      
      
      <div className="flex flex-wrap">
        <div className="w-full md:w-8/12 p-8 ">
          <iframe
            width="100%"
            height="400px"
            src={`https://www.youtube.com/embed/${mainVideoId}`}
            className='rounded-3xl'
            title="YouTube video player"
            samesite="none"
          />
          <Explore mainVideoId={mainVideoId} />
        </div>
        <div className='w-full md:w-4/12 flex flex-col'>
        <div className=" p-3  mt-8 mr-3 overflow-hidden overflow-y-auto rounded-xl div-shadow bg-gradient-to-r from-bele2 to-bele1" style={{height: "450px", overflowY: "scroll"}} >
          {sidebarVideoIds.map((videoId) => (
            <div
              key={videoId}
              className="flex p-2 cursor-pointer hover:bg-btext text-white rounded-xl"
              onClick={() => handleSideVideoClick(videoId)}
            >
              <img
                src={`http://img.youtube.com/vi/${videoId}/0.jpg`}
                className="w-36 rounded-xl"
              />
              <p className="text-md ml-2 mt-auto mb-auto font-normal">{titles[sidebarVideoIds.indexOf(videoId)]}</p>
            </div>
          ))}
          
        </div>
        <div className='p-3 py-6 pt-10  mt-8 mr-3 mb-10  rounded-xl div-shadow bg-gradient-to-r from-bele2 to-bele1 text-bbg'>
            <AskDoubt/>
          </div>
        </div>
        
      </div>


      
        

    </>
  );
}

export default VideoPlayer;
