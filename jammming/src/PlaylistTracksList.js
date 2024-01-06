import React, { useState } from 'react';
import PlaylistTrack from './PlaylistTrack';

function PlaylistTracksList({ playlistTracksArray }) {
  return (
    <div className="PlaylistTracksList">
      {
        playlistTracksArray.map((track, index) => (
          <PlaylistTrack track={track} key={track.id} />
        ))
      }
    </div>
  );
}

export default PlaylistTracksList;
