import React, { useState, useEffect } from 'react';
import Explore from './Explore';

function VideoPlayer() {
  const [mainVideoId, setMainVideoId] = useState('');
  const [sidebarVideoIds, setSidebarVideoIds] = useState([]);

  useEffect(() => {
    const videoIds = JSON.parse(sessionStorage.getItem('VideoIds'));
    if (videoIds && videoIds.length > 0) {
      setMainVideoId(videoIds[0]);
      setSidebarVideoIds(videoIds);
    }
  }, []);

  const handleSideVideoClick = (videoId) => {
    setMainVideoId(videoId);
  };

  return (
    <>
        <div className='pb-20 pl-10'>
        <div className='text-4xl font-bold text-center p-5'>
        Video Player
      </div>
      <div className="flex flex-wrap">
        <div className="flex-1">
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${mainVideoId}`}
            title="YouTube video player"
            samesite="none"
          />
        </div>
        <div className="flex-1 flex flex-col">
          {sidebarVideoIds.map((videoId) => (
            <div
              key={videoId}
              className="cursor-pointer p-4 border mr-10"
              onClick={() => handleSideVideoClick(videoId)}
            >
              <iframe
                title="Sidebar Video"
                width="50%"
                height="300px"
                src={`https://www.youtube.com/embed/${videoId}`}
                className=" pointer-events-none"
                samesite="none"
              />
            </div>
          ))}
        </div>
      </div>
      <Explore mainVideoId={mainVideoId} />

        </div>
      
    </>
  );
}

export default VideoPlayer;
