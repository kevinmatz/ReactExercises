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
        <span className="sectionTitle">Add to a playlist</span>
        <label htmlFor="PlaylistName">Playlist name&nbsp;</label>
        <input name="PlaylistName" value={playlistName} onChange={playlistNameChangeHandler} />
      </div>
      <PlaylistTracksList
        playlistTracksArray={playlistTracksArray}
        removeTrackFromPlaylistHandler={removeTrackFromPlaylistHandler}
      />
      <div className="savePlaylistButtonSection">
        <button
          className="btn btn-primary"
          onClick={savePlaylistToSpotifyHandler}>
            Save Playlist to Spotify
        </button>
      </div>
    </div>
  );
}

// style={{'width': '100%'}}

export default Playlist;
