import React, { useState } from 'react';
import PlaylistTracksList from './PlaylistTracksList';


function Playlist({
  playlistName,
  playlistNameChangeHandler,
  playlistTracksArray
  }) {
  
    // const [playlistName, setPlaylistName] = useState("");

  // function playlistNameChangeHandler(event) {
  //   setPlaylistName(() => event.target.value);
  // }

  return (
    <div className="Playlist">
      <label for="PlaylistName">Playlist name:&nbsp;</label>
      <input name="PlaylistName" value={playlistName} onChange={playlistNameChangeHandler} />
      <p>Tracks in this playlist:</p>
      <PlaylistTracksList playlistTracksArray={playlistTracksArray} />
    </div>
  );
}

export default Playlist;
