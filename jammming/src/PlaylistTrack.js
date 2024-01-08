import React, { useState } from 'react';

function PlaylistTrack(props) {
  
  function removeTrackFromPlaylistHandler(event) {
    props.removeTrackFromPlaylistHandler(props.track);
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
        onClick={() => removeTrackFromPlaylistHandler(props.track)}>
          &ndash;
      </button>
    </div>
  );
}

export default PlaylistTrack;
