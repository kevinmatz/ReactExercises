import React, { useState } from 'react';

function PlaylistTrack(props) {
  
  function removeTrackFromPlaylistHandler(event) {
    props.removeTrackFromPlaylistHandler(props.track);
  }

  return (
    <div className="Track">
      <p>Id: {props.track.id}</p>
      <p>Name: {props.track.name}</p>
      <p>Artists: {props.track.artists.map((artist, index) => (
          <span key={index}>{artist.name}{index === props.track.artists.length - 1 ? "" : ", "}</span>
      ))}</p>

      <button onClick={() => removeTrackFromPlaylistHandler(props.track)}>&lt;= Remove from Playlist</button>
    </div>
  );
}

export default PlaylistTrack;
