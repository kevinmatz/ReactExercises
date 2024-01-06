import React from 'react';
import Track from './Track';


function TrackList({ tracksArray }) {
  return (
    <div className="TrackList">
      <div className="container">
        {
          tracksArray.map((track, index) => (
            <Track track={track} key={index} />
          ))
        }
      </div>
    </div>
  );
}

export default TrackList;
