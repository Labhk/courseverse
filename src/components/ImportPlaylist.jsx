import React, { useState , useEffect } from 'react';
import axios from 'axios';
import queryString from 'query-string';
import { Link } from 'react-router-dom';
import Header from './header';


const api_key = import.meta.env.VITE_API_KEY;


function ImportPlaylist() {
  const [playlistUrl, setPlaylistUrl] = useState('');
  const [playlistData, setPlaylistData] = useState(null);
  const [text, setText] = useState('hi');
  const courses = JSON.parse(sessionStorage.getItem('Courses'))
  

  const handleInputChange = (event) => {
    setPlaylistUrl(event.target.value);
    const parsedUrl = queryString.parseUrl(event.target.value);
    const listId = parsedUrl.query.list;
   
    axios.get(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=${listId}&key=${api_key}`)
        .then(response => {
        setPlaylistData(response.data);
        })
        .catch(error => {
        console.log(error);
        });
  };

  useEffect(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  const handleCopy = () => {
    const copyText ='https://www.youtube.com/watch?v=HfTXHrWMGVY&list=PLZlA0Gpn_vH-cEDOofOujFIknfZZpIk3a';
    setText(copyText);
  }

  const handleExportClick = () => {
    console.log(playlistData);
  
    if (playlistData && playlistData.items) {
      const videoIds = playlistData.items.map(item => item.contentDetails.videoId);
      sessionStorage.setItem('VideoIds', JSON.stringify(videoIds));
      const titles = playlistData.items.map(item => item.snippet.title);
      sessionStorage.setItem('Titles', JSON.stringify(titles));
      
      const firstVideo = playlistData.items[0];
        if (firstVideo.snippet.thumbnails && firstVideo.snippet.thumbnails.high) {
        sessionStorage.setItem('Thumbnail', firstVideo.snippet.thumbnails.standard.url);
        }
        sessionStorage.setItem('Title', firstVideo.snippet.title);
        sessionStorage.setItem('Author', firstVideo.snippet.channelTitle);

    }  
  };



  return (
    <>
        <Header/>
        <div className='flex flex-col justify-center items-center'>
          <div className='text-3xl text-center p-5 pt-10'>
            Enter Playlist & Create Course
          </div>
          <div className='p-3 w-1/2'>
            
            <input
              className='text-2xl w-full rounded-full py-3 px-5 text-gray-400 leading-tight focus:outline-none focus:shadow-outline input-shadow '
              id='input-field'
              type='text'
              placeholder='Enter URL'
              value={playlistUrl}
              onChange={handleInputChange}
            />
          </div>
          <Link to='/start'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white text-2xl mt-4 py-2 px-4 rounded-full box-shadow focus:shadow-none' onClick={handleExportClick}>
            Create Course
          </button>
          </Link>
        </div>

        <div class="flex flex-wrap mt-10">
          <div class="w-7/12 px-5 pl-10">
          {localStorage.getItem('email') && (
            <>
            <div className="text-3xl font-medium text-gray-700">
              Hello, Learner<span className='text-xl'>({localStorage.getItem('email')})</span>
            </div>
            <div className='flex flex-wrap p-5'>
            {!courses && <div className='italic text-3xl text-gray-500'>No Course Created</div>}
            {courses && courses.length > 0 && courses.map((video, index) => (
              <Link to="/player" key={index} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-2 mb-4'>
                <div className='border p-4 rounded-xl card-shadow'>
                  <img src={video.thumbnail} alt={video.title} className='rounded-xl' />
                  <h3 className='text-sm leading-tight font-medium pt-2 h-24'>{video.title}</h3>
                  <div className="h-2 w-4/3 bg-gray-200 rounded overflow-hidden ">
                    <div className="h-full bg-green-500" style={{ width:`${(video.Count / video.videoCount) * 100}%` }}></div>
                  </div>
                  <p className='font-mono font-semibold'>{Math.floor((video.Count / video.videoCount) * 100)}%</p>
                </div>
              </Link>
            ))}
</div>


            </>
          )}
          </div>
          <div class="w-4/12 flex flex-col ml-20 mt-10 ">
          <div className="text-3xl font-medium text-gray-700">
              Popular Playlists
          </div>
            <p className='mt-3 text-blue-500 underline text-md hover:text-blue-300 cursor-pointer' onClick={handleCopy} >https://www.youtube.com/watch?v=HfTXHrWMGVY&....</p>
            <p className='text-blue-500 underline text-md hover:text-blue-300 cursor-pointer' onClick={handleCopy} >https://www.youtube.com/watch?v=HfTXHrWMGVY&....</p>
            <p className='text-blue-500 underline text-md hover:text-blue-300 cursor-pointer' onClick={handleCopy} >https://www.youtube.com/watch?v=HfTXHrWMGVY&....</p>
            <p className='text-blue-500 underline text-md hover:text-blue-300 cursor-pointer' onClick={handleCopy} >https://www.youtube.com/watch?v=HfTXHrWMGVY&....</p>
            <p className='mt-3 text-gray-500'>Click to Copy</p>
          </div>
        </div>
        
      
    </>
  );
}

export default ImportPlaylist;
