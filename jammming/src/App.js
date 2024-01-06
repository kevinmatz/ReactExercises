import React, { useState } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import TrackList from './TrackList';
import searchTracks from './utils/Spotify';

const dummyTracksArrayForTesting = [
  {
    id: "35305",
    name: "Don't be Cruel",
    artists: [{name: "Elvis Presley"}]
  },
  {
    id: "21993",
    name: "Heartbreak Hotel",
    artists: [{name: "Elvis Presley"}, {name: "Tom Jones"}]
  },
  {
    id: "44044",
    name: "Never Gonna Give You Up",
    artists: [{name: "Rick Astley"}]
  }
];

function App() {
  const [tracksArray, setTracksArray] = useState([]);
  const [playlistArray, setPlaylistArray] = useState([]);

  const handleSearchSongs = async (searchTerms) => {
    const results = await searchTracks(searchTerms);
    setTracksArray(results);
  }

  return (
    <div className="App">
      <h1>Jammming</h1>
      <SearchBar searchHandler={handleSearchSongs} />
      <br/>
      <TrackList tracksArray={tracksArray} />
    </div>
  );
}

export default App;

