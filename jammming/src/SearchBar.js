import React, { useState } from 'react';

function SearchBar(props) {   // Expected props: "searchHandler" (function that takes parameters (searchTerms, location, sortOption))

  const [searchTerms, setSearchTerms] = useState("");

  function searchTermsChangeHandler(event) {
    setSearchTerms(() => event.target.value);
  }

  function searchButtonClickHandler(event) {
    console.log(`Searching Spotify with ${searchTerms}`);
    props.searchHandler(searchTerms);
  }

  return (
    <div className="searchBar">
      <div className="topSection">
        <span className="sectionTitle">Find tracks</span>
        <div className="searchControlsRow">
          <input className="searchTextField" name="searchTerms" style={{"width": "100%"}} onChange={searchTermsChangeHandler} />
        &nbsp;&nbsp;&nbsp;&nbsp;
          <button className="searchButton btn btn-primary" onClick={searchButtonClickHandler}>Search</button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
