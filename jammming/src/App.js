import React, { useState } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import TrackList from './TrackList';



function App() {
  const [tracksArray, setTracksArray] = useState(dummyTracksArray);
  const [playlistArray, setPlaylistArray] = useState([]);

  // setTracksArray(dummyTracksArray);

  const searchSongs = async (searchTerms) => {
    // const results = await searchBusinessesOnYelp(searchTerms, location, sortOption);
    // console.log("results:");
    // console.log(results);
    // setBusinessesList(results);
    const results = [];
    setTracksArray(results);
  }

  return (
    <div className="App">
      <h1>Jammming</h1>
      <SearchBar searchHandler={searchSongs} />
      <br/>
      <TrackList tracksArray={dummyTracksArray} />
    </div>
  );
}

export default App;

const dummyTracksArray = [
  {
    title: "Don't be Cruel",
    artist: "Elvis Presley"
  },
  {
    title: "Heartbreak Hotel",
    artist: "Elvis Presley"
  },
  {
    title: "Never Gonna Give You Up",
    artist: "Rick Astley"
  }
];
