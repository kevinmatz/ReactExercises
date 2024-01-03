import getYelpApiKey from '../secrets/YelpApiKey';



// Note: the file secrets/YelpApiKey.js should not be checked into source control. If reviving this project, 
// the structure of that file should look like this:
//
// const yelpApiKey = '...';
// function getYelpApiKey() {
//   return yelpApiKey;
// }
// export default getYelpApiKey;



const yelpApiBaseUrl = 'https://api.yelp.com/v3';

// const options = {method: 'GET', headers: {accept: 'application/json'}};
// fetch('https://api.yelp.com/v3/businesses/search?location=Victoria&term=tandoori&sort_by=best_match&limit=20', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));


const searchBusinessesOnYelp = async (searchTerms, location, sortOption) => {
  try {
    const endpoint = '/businesses/search';
    const parameters = `?term=${searchTerms}&location=${location}&sort_by=${sortOption}&limit=50`;

    const url = yelpApiBaseUrl + endpoint + parameters;

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'Authorization': 'Basic ' + yelpApiBaseUrl
      }
    };

    const response = await fetch(url, options);

    if (response.ok) {
      const jsonResponse = await response.json();
      console.log('jsonResponse: ' + jsonResponse);
      return jsonResponse;
    } else {
      console.log('Yelp API request failed');
    }
  } catch (error) {
    console.log(error);
  }
}

export default searchBusinessesOnYelp;
