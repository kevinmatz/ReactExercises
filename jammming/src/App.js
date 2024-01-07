import React, { useState } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import TrackList from './TrackList';
import Playlist from './Playlist';
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
  const [playlistName, setPlaylistName] = useState("");
  const [playlistTracksArray, setPlaylistTracksArray] = useState([]);

  function playlistNameChangeHandler(event) {
    setPlaylistName(() => event.target.value);
  }

  const handleSearchSongs = async (searchTerms) => {
    const results = await searchTracks(searchTerms);
    setTracksArray(results);
  }

  const handleAddTrackToPlaylist = (track) => {
    // console.log("handleAddTrackToPlaylist; track:");
    // console.log(track);

    // Check whether the track is already in the playlist
    // (I think a playlist should be able to have the same track
    // more that once, but for now let's avoid it, as we will have
    // two identical keys if we are using track.id as the key)
    if (playlistTracksArray.some(x => x.id === track.id)) {
      console.log(`Selected track with track.id === ${track.id} is already in the playlist, so skipping it`);
    } else {
      setPlaylistTracksArray([...playlistTracksArray, track]);
    }
  }

  return (
    <div className="App">
      <h1>Jammming</h1>
      <br/>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <SearchBar searchHandler={handleSearchSongs} />
            <p>Tracks:</p>
            <TrackList
              tracksArray={tracksArray}
              addTrackToPlaylistHandler={handleAddTrackToPlaylist}
            />
          </div>
          <div className="col-md-4">
            <Playlist
              playlistName={playlistName}
              playlistNameChangeHandler={playlistNameChangeHandler}
              playlistTracksArray={playlistTracksArray} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

