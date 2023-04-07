import React, { useState, useEffect } from 'react';
import axios from 'axios';
import queryString from 'query-string';

const api_key = import.meta.env.VITE_API_KEY;

function Playlist(url) {
  const parsedUrl = queryString.parseUrl(url);
  const listId = parsedUrl.query.list;
  const [playlistData, setPlaylistData] = useState(null);

  useEffect(() => {
    axios.get(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=25&playlistId=${listId}&key=${api_key}`)
      .then(response => {
        setPlaylistData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [listId]);

  if (!playlistData) {
    return <div>Loading...</div>;
  }

  return (
    <div className='text-5xl'>
        Done
    </div>
  );
};

export default Playlist;
