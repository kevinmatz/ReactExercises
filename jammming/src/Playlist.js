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
        <div className="playlistNameRow">
          <label class="playlistNameLabel" htmlFor="PlaylistName">Playlist name&nbsp;</label>
          <input class="playlistNameTextField" name="PlaylistName" value={playlistName} onChange={playlistNameChangeHandler} />
        </div>
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
