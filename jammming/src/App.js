import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import TrackList from './TrackList';
import Playlist from './Playlist';
import { searchTracks, savePlaylistToSpotify } from './utils/Spotify';
import { getClientId } from './secrets/SpotifyApiKey';


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

  // For Spotify authentication/authorization for access to user account data:
  const REDIRECT_URI = "http://localhost:3000";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("");

  // Credit for this "login to Spotify code": https://www.youtube.com/watch?v=wBq3HCvYfUg ("Dom the dev")
  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token")

    if (!token && hash) {
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1];
      console.log(token);
      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }

    setToken(token);
  }, []);

  const logoutFromSpotify = () => {
    setToken("");
    window.localStorage.removeItem("token");
  }

  function handlePlaylistNameChange(event) {
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
      // Add track to the end of the array:s
      setPlaylistTracksArray([...playlistTracksArray, track]);
    }
  }

  const handleRemoveTrackFromPlaylist = (track) => {
    setPlaylistTracksArray(playlistTracksArray.filter(x => x.id !== track.id));
  }

  const handleSavePlaylistToSpotify = () => {
    console.log("handleSavePlaylistToSpotify");

    // Check: Has a name been entered?
    if (playlistName.trim() === '') {
      alert("Please enter a playlist name.");
      return;
    }

    // TODO: Check for the playlist being empty?

    const result = savePlaylistToSpotify(token, playlistName, playlistTracksArray);

    // TODO: Check result and report success or failure to user
  }

  return (
    <div className="app">
      <div className="app-header">
        <br/>
        <h1>Ja<font style={{'color': 'red'}}>m</font><font style={{'color': 'lawngreen'}}>m</font><font style={{'color': 'royalblue'}}>m</font>ing</h1>
        <br/>
        <p>
          {!token ?
            <a
              className="btn btn-primary"
              href={`${AUTH_ENDPOINT}?client_id=${getClientId()}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=playlist-modify-private`}>
                Login to Spotify
            </a>
          :
            <button
              className="btn btn-primary"
              onClick={logoutFromSpotify}>
                Logout from Spotify
            </button>
          }
        </p>
        <br/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-5">
            <SearchBar searchHandler={handleSearchSongs} />
            <TrackList
              tracksArray={tracksArray}
              addTrackToPlaylistHandler={handleAddTrackToPlaylist}
            />
          </div>
          <div className="col-md-5">
            <Playlist
              playlistName={playlistName}
              playlistNameChangeHandler={handlePlaylistNameChange}
              playlistTracksArray={playlistTracksArray}
              removeTrackFromPlaylistHandler={handleRemoveTrackFromPlaylist}
              savePlaylistToSpotifyHandler={handleSavePlaylistToSpotify} />
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
    </div>
  );
}

export default App;

