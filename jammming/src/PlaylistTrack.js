import React, { useState } from 'react';


function PlaylistTrack(props) {
    
  return (
    <div className="Track">
      <p>Id: {props.track.id}</p>
      <p>Name: {props.track.name}</p>
      <p>Artists: {props.track.artists.map((artist, index) => (
          <span key={index}>{artist.name}{index === props.track.artists.length - 1 ? "" : ", "}</span>
      ))}</p>

      <button>&lt;= Remove from Playlist</button>
    </div>
  );
}

export default PlaylistTrack;
