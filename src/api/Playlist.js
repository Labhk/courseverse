import React, { useState } from 'react';
import queryString from 'query-string';

const api_key = import.meta.env.VITE_API_KEY;

export const Playlist = (url) => {
  const parsedUrl = queryString.parseUrl(url);
  const listId = parsedUrl.query.list;
  console.log(listId);
  console.log(`${api_key} Labh`)
};

