import React, { useState } from 'react';

function SearchBar(props) {   // Expected props: "searchHandler" (function that takes parameters (searchTerms, location, sortOption))

  const [searchTerms, setSearchTerms] = useState("");
  const [location, setLocation] = useState("");
  const [sortOption, setSortOption] = useState("best_match");

  function sortOptionSelectionHandler(event) {
    setSortOption(event.target.value);
  }

  function searchTermsChangeHandler(event) {
    setSearchTerms(() => event.target.value);
  }

  function locationChangeHandler(event) {
    setLocation(() => event.target.value);
  }

  function searchButtonClickHandler(event) {
    console.log(`Searching Yelp with ${searchTerms}, ${location}, ${sortOption}`);
    props.searchHandler(searchTerms, location, sortOption);
  }

  return (
    <div className="SearchBar">
      <input type="radio" id="best_match" name="sorting-options" value="best_match" onClick={sortOptionSelectionHandler} checked />
      <label for="best_match">&nbsp;Best Match</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input type="radio" id="rating" name="sorting-options" value="rating" onClick={sortOptionSelectionHandler} />
      <label for="rating">&nbsp;Highest Rated</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input type="radio" id="review_count" name="sorting-options" value="review_count" onClick={sortOptionSelectionHandler} />
      <label for="review_count">&nbsp;Most Reviewed</label>
      <br/>
      <label for="searchTerms">Search for:&nbsp;</label>
      <input name="searchTerms" onChange={searchTermsChangeHandler} />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <label for="location">Location:&nbsp;</label>
      <input name="location" onChange={locationChangeHandler} />
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button className="btn btn-primary" onClick={searchButtonClickHandler} >Search</button>
    </div>
  );
}

export default SearchBar;
