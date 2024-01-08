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
        <label htmlFor="searchTerms">Search&nbsp;</label>
        <input name="searchTerms" onChange={searchTermsChangeHandler} />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button className="btn btn-primary" onClick={searchButtonClickHandler} >Search</button>
      </div>
    </div>
  );
}

export default SearchBar;
