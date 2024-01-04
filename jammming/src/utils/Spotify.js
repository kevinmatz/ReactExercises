import { getClientId, getClientSecret } from '../secrets/SpotifyApiKey';

// Note: the file secrets/SpotifyApiKey.js should not be checked into source control. If reviving this project, 
// the structure of that file should look like this:
//
// const clientId = '...';
// const clientSecret = '...';
// export function getClientId() {
//   return clientId;
// }
// export function getClientSecret() {
//   return clientSecret;
// }


// CorsAnywhere:
// Go to "https://cors-anywhere.herokuapp.com/corsdemo" and click "Request temporary access to the demo server"
const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
// const spotifyApiBaseUrl = 'https://api.spotify.com/v1';
const spotifyApiBaseUrl = corsAnywhereUrl + 'api.spotify.com/v1';

// TODO: Write function
// TODO: Token is good for one hour, implement caching?
const getAccessToken = async () => {
  
  // See: https://developer.spotify.com/documentation/web-api/tutorials/getting-started

  // curl -X POST "https://accounts.spotify.com/api/token" \
  //    -H "Content-Type: application/x-www-form-urlencoded" \
  //    -d "grant_type=client_credentials&client_id=your-client-id&client_secret=your-client-secret"
  //
  // returns (example):
  //
  // {
  //   "access_token": "BQDBKJ5eo5jxbtpWjVOj7ryS84khybFpP_lTqzV7uV-T_m0cTfwvdn5BnBSKPxKgEb11",
  //   "token_type": "Bearer",
  //   "expires_in": 3600
  // }
  
  try {
    // See: https://developer.spotify.com/documentation/web-api/reference/search
    const endpoint = '/search';
    const parameters = `?q=${searchTerms}&type=track&limit=50`;

    const url = spotifyApiBaseUrl + endpoint + parameters;

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'Authorization': 'Bearer ' + getAccessToken()
      }
    };

    const response = await fetch(url, options);

    if (response.ok) {
      const jsonResponse = await response.json();

      console.log('jsonResponse:');
      console.log(jsonResponse);

      // Extract and return the array of tracks:
      return jsonResponse["tracks"]["items"];
    } else {
      console.log('Spotify API request failed:');
      console.log(response);
    }
  } catch (error) {
    console.log(error);
  }

}


const searchTracks = async (searchTerms) => {
  try {
    // See: https://developer.spotify.com/documentation/web-api/reference/search
    const endpoint = '/search';
    const parameters = `?q=${searchTerms}&type=track&limit=50`;

    const url = spotifyApiBaseUrl + endpoint + parameters;

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'Authorization': 'Bearer ' + getAccessToken()
      }
    };

    const response = await fetch(url, options);

    if (response.ok) {
      const jsonResponse = await response.json();

      console.log('jsonResponse:');
      console.log(jsonResponse);

      // Extract and return the array of tracks:
      return jsonResponse["tracks"]["items"];
    } else {
      console.log('Spotify API request failed:');
      console.log(response);
    }
  } catch (error) {
    console.log(error);
  }
}

export default searchTracks;
