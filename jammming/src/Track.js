import React, { useState } from 'react';


function Track(props) {
  
  const title = props.track.title;
  const artist = props.track.artist;

  console.log("Track: title = " + title);
  
  return (
    <div className="Track">
      <p>{title}</p>
      <p>{artist}</p>
      <button>Add to Playlist</button>
    </div>
  );
}

export default Track;

