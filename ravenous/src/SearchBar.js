import React from 'react';

function SearchBar() {
  return (
    <div className="SearchBar">
      <label for="searchTerms">Search for:&nbsp;</label>
      <input name="searchTerms" />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <label for="location">Location:&nbsp;</label>
      <input name="location" />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button className="btn btn-primary">Search</button>
    </div>
  );

  // TODO: Sorting options for:
  // Best Match
  // Highest Rated
  // Most Reviewed
}

export default SearchBar;
