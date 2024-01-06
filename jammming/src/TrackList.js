import React from 'react';
import Track from './Track';


function TrackList({ tracksArray }) {
  return (
    <div className="TrackList">
      {
        tracksArray.map((track, index) => (
          <Track track={track} key={track.id} />
        ))
      }
    </div>
  );
}

export default TrackList;
