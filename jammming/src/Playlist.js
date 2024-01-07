import React, { useState } from 'react';
import PlaylistTracksList from './PlaylistTracksList';

function Playlist({
    playlistName,
    playlistNameChangeHandler,
    playlistTracksArray,
    removeTrackFromPlaylistHandler,
    savePlaylistToSpotifyHandler
  }) {
  
  return (
    <div className="Playlist">
      <label htmlFor="PlaylistName">Playlist name:&nbsp;</label>
      <input name="PlaylistName" value={playlistName} onChange={playlistNameChangeHandler} />
      <p>Tracks in this playlist:</p>
      <PlaylistTracksList
        playlistTracksArray={playlistTracksArray}
        removeTrackFromPlaylistHandler={removeTrackFromPlaylistHandler}
      />
      <button
        className="btn btn-primary"
        onClick={savePlaylistToSpotifyHandler}>
          Save Playlist to Spotify
      </button>
    </div>
  );
}

export default Playlist;
