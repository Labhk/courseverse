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
    setMainVideoId(videoId);
  };

  return (
    <>
        <Header/>
        
        
        <div className="flex flex-wrap p-2">
  <div className="w-full md:w-8/12 p-8">
    <iframe
      width="100%"
      height="400px"
      src={`https://www.youtube.com/embed/${mainVideoId}`}
      className='rounded-3xl'
      title="YouTube video player"
      samesite="none"
    />
  </div>
  <div className="w-full md:w-4/12 flex flex-col p-3 mt-10 overflow-hidden" style={{height: "450px", overflowY: "scroll"}} >
    {sidebarVideoIds.map((videoId) => (
      <div
        key={videoId}
        className="flex p-2"
        onClick={() => handleSideVideoClick(videoId)}
      >
        <img
          src={`http://img.youtube.com/vi/${videoId}/1.jpg`}
          className="w-fit rounded-xl"
        />
        <p className="text-sm ml-2 mt-auto mb-auto">{titles[sidebarVideoIds.indexOf(videoId)]}</p>
      </div>
    ))}
  </div>
</div>


      <Explore mainVideoId={mainVideoId} />
        

    </>
  );
}

export default VideoPlayer;
