import React from 'react';
import Business from './Business';

function BusinessList(props) {
  const businessesArray = props.businessListPropsObject.businessesArray;

  // Function to chunk the array
  const chunkArray = (array, size) => {
    let result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  }

  // Chunk the businessesArray into groups of 3
  const chunkedBusinesses = chunkArray(businessesArray, 3);

  return (
    <div className="BusinessListingsPanel">
      <div className="container">
        {chunkedBusinesses.map((chunk, rowIndex) => (
          <div key={rowIndex} className="row">
            {chunk.map((business, index) => (
              <div key={index} className="col-md-4">
                <Business business={business} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BusinessList;
