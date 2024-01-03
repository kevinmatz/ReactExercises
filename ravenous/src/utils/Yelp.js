import getYelpApiKey from '../secrets/YelpApiKey';



// Note: the file secrets/YelpApiKey.js should not be checked into source control. If reviving this project, 
// the structure of that file should look like this:
//
// const yelpApiKey = '...';
// function getYelpApiKey() {
//   return yelpApiKey;
// }
// export default getYelpApiKey;


// CorsAnywhere:
// Go to "https://cors-anywhere.herokuapp.com/corsdemo" and click "Request temporary access to the demo server"
const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
// const yelpApiBaseUrl = corsAnywhereUrl + 'https://api.yelp.com/v3';
const yelpApiBaseUrl = corsAnywhereUrl + 'api.yelp.com/v3';


// Returns an array of Business records from Yelp's API
const searchBusinessesOnYelp = async (searchTerms, location, sortOption) => {
  try {
    const endpoint = '/businesses/search';
    const parameters = `?term=${searchTerms}&location=${location}&sort_by=${sortOption}&limit=50`;

    const url = yelpApiBaseUrl + endpoint + parameters;

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'Authorization': 'Bearer ' + getYelpApiKey()
      }
    };

    const response = await fetch(url, options);

    if (response.ok) {
      const jsonResponse = await response.json();

      // console.log('jsonResponse:');
      // console.log(jsonResponse);

      // Extract and return the array of businesses:
      return jsonResponse["businesses"];
    } else {
      console.log('Yelp API request failed:');
      console.log(response);
    }
  } catch (error) {
    console.log(error);
  }
}

// const options = {method: 'GET', headers: {accept: 'application/json'}};
// fetch('https://api.yelp.com/v3/businesses/search?location=Victoria&term=tandoori&sort_by=best_match&limit=20', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));


export default searchBusinessesOnYelp;
