import React from 'react';

function Business({business}) {
  return (
    <div>
      <img src={business.image_url} style={{'width': '150px'}} />
      <p>Name: {business.name}</p>
      <p>Address: {business.location.display_address[0]}</p>
      <p>Phone: {business.display_phone}</p>
    </div>
  );
}

export default Business;
