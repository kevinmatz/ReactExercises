import React from 'react';

function Business({business}) { // image, name, address, city, state, zipcode, category, rating, review_count) {
  return (
    <div>
      <img src={business.image_url} style={{'width': '150px'}} />
      <p>Name: {business.name}</p>
      <p>Address: {business.address}</p>
    </div>
  );
}

export default Business;
