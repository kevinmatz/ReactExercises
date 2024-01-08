import React, { useState } from 'react';
import PlaylistTrack from './PlaylistTrack';

function PlaylistTracksList({ playlistTracksArray, removeTrackFromPlaylistHandler }) {
  return (
    <div className="playlistTracksList">
      {
        playlistTracksArray.map((track, index) => (
          <PlaylistTrack
            track={track}
            key={track.id}
            removeTrackFromPlaylistHandler={removeTrackFromPlaylistHandler}  
          />
        ))
      }
    </div>
  );
}

export default PlaylistTracksList;
