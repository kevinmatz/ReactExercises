import React from 'react';
import Track from './Track';

function TrackList({ tracksArray, addTrackToPlaylistHandler }) {
  return (
    <div className="TrackList">
      {
        tracksArray.map((track, index) => (
          <Track
            track={track}
            key={track.id}
            addTrackToPlaylistHandler={addTrackToPlaylistHandler}
          />
        ))
      }
    </div>
  );
}

export default TrackList;
