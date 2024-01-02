import React, { useState } from 'react';

function SearchBar() {
  const [searchTerms, setSearchTerms] = useState("");
  const [location, setLocation] = useState("");
  const [sortingOption, setSortingOption] = useState("best-match");

  function sortingOptionSelectionHandler(event) {
    setSortingOption(event.target.value);
  }

  return (
    <div className="SearchBar">
      <input type="radio" id="best-match" name="sorting-options" value="best-match" onClick={sortingOptionSelectionHandler} />
      <label for="best-match">&nbsp;Best Match</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input type="radio" id="highest-rated" name="sorting-options" value="highest-rated" onClick={sortingOptionSelectionHandler} />
      <label for="highest-rated">&nbsp;Highest Rated</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input type="radio" id="most-reviewed" name="sorting-options" value="most-reviewed" onClick={sortingOptionSelectionHandler} />
      <label for="most-reviewed">&nbsp;Most Reviewed</label>
      <br/>
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
