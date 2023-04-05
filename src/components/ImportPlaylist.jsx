import React, { useState } from 'react';
import { Playlist } from '../api/Playlist';

function ImportPlaylist() {
  const [playlistUrl, setPlaylistUrl] = useState('');

  const handleInputChange = (event) => {
    setPlaylistUrl(event.target.value);
  };

  const handleExportClick = () => {
    Playlist(playlistUrl);
  };

  console.log(playlistUrl);

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
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={handleExportClick}>
          Export
        </button>
      </div>
    </>
  );
}

export default ImportPlaylist;
