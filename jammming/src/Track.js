import React, { useState } from 'react';

function Track(props) {
  
  function addTrackToPlaylistHandler(event) {
    props.addTrackToPlaylistHandler(props.track);
  }

  return (
    <div className="track">
      <span className="trackTitle">{props.track.name}</span>
      <br/>
      <span className="trackArtists">{props.track.artists.map((artist, index) => (
          <span key={index}>{artist.name}{index === props.track.artists.length - 1 ? "" : ", "}</span>
      ))}</span>
      <br/>

      <button
        className="btn btn-primary"
        onClick={() => addTrackToPlaylistHandler(props.track)}>
          +
      </button>
    </div>
  );

  // <p>Id: {props.track.id}</p>

}

export default Track;
