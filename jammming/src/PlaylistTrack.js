import React, { useState } from 'react';

function PlaylistTrack(props) {
  
  function removeTrackFromPlaylistHandler(event) {
    props.removeTrackFromPlaylistHandler(props.track);
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
          onClick={() => removeTrackFromPlaylistHandler(props.track)}>
            &ndash;
        </button>
      </div>
    </div>
  );
}

export default PlaylistTrack;
