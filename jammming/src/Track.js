import React, { useState } from 'react';

function Track(props) {
  
  function addTrackToPlaylistHandler(event) {
    props.addTrackToPlaylistHandler(props.track);
  }

  return (
    <div className="track">
      <div className="trackInfo">
        <div className="trackTitle">{props.track.name}</div>
        <div className="trackArtists">{props.track.artists.map((artist, index) => (
            <span key={index}>{artist.name}{index === props.track.artists.length - 1 ? "" : ", "}</span>
        ))}</div>
      </div>
      <div className="buttonArea">
        <button
          className="btn btn-primary"
          onClick={() => addTrackToPlaylistHandler(props.track)}>
            +
        </button>
      </div>
    </div>
  );

  // <p>Id: {props.track.id}</p>

}

export default Track;
