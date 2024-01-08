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
    <div className="playlist">
      <div className="topSection">
        <span className="sectionTitle">Playlist</span>
        <label htmlFor="PlaylistName">Playlist name:&nbsp;</label>
        <input name="PlaylistName" value={playlistName} onChange={playlistNameChangeHandler} />
      </div>
      <PlaylistTracksList
        playlistTracksArray={playlistTracksArray}
        removeTrackFromPlaylistHandler={removeTrackFromPlaylistHandler}
      />
      <button
        className="savePlaylistButton btn btn-primary"
        onClick={savePlaylistToSpotifyHandler}>
          Save Playlist to Spotify
      </button>
    </div>
  );
}

// style={{'width': '100%'}}

export default Playlist;
