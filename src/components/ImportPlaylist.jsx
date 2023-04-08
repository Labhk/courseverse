import React, { useState , useEffect } from 'react';
import axios from 'axios';
import queryString from 'query-string';
import { Link } from 'react-router-dom';

const api_key = import.meta.env.VITE_API_KEY;


function ImportPlaylist() {
  const [playlistUrl, setPlaylistUrl] = useState('');
  const [playlistData, setPlaylistData] = useState(null);

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
        <div className='flex flex-col justify-center items-center'>
        <div className='text-4xl font-bold text-center p-5'>
          Enter Playlist Url
        </div>
        <div className='p-5'>
          <label className='block mb-2 text-gray-700 font-bold text-xl' htmlFor='input-field'>Input Label</label>
          <input
            className='border border-cyan-900 text-2xl w-96 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='input-field'
            type='text'
            placeholder='Enter Playlist Url'
            value={playlistUrl}
            onChange={handleInputChange}
          />
        </div>
        <Link to='/start'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleExportClick}>
          Export
        </button>
        </Link>
        
      </div>
        
      
    </>
  );
}

export default ImportPlaylist;
