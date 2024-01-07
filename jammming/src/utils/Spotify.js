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
const spotifyApiBaseUrl = corsAnywhereUrl + 'https://api.spotify.com/v1';
const spotifyAccountsGetTokenUrl = corsAnywhereUrl + "https://accounts.spotify.com/api/token";
const spotifyGetUserIdUrl = corsAnywhereUrl + 'https://api.spotify.com/v1/me';

let accessToken = '';
let accessTokenLastUpdated = undefined;  // TODO
let accessTokenExpiresAt = undefined;    // TODO


// TODO: Token is good for one hour, implement caching!
const getAccessToken = async () => {

  // See: https://developer.spotify.com/documentation/web-api/tutorials/getting-started
  //
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

    var authHeader = 'Basic ' + btoa(getClientId() + ':' + getClientSecret());
    // this only works with Node.js, not in a browser: (new Buffer.from(getClientId() + ':' + getClientSecret()).toString('base64'));

    console.log("authHeader: " + authHeader);

    let response = await fetch(spotifyAccountsGetTokenUrl, {
      method: 'POST',
      headers: {
        'Authorization': authHeader,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials'
    });

    let data = await response.json();
    if (data.access_token) {
      accessToken = data.access_token;
      console.log("Successfully received access token: " + accessToken);
      accessTokenLastUpdated = Date.now();
      // accessTokenExpiresAt = accessTokenLastUpdated() + data['expires_in'];
    } else {
      console.log("Error: Spotify access token not received");
      console.log("Response:");
      console.log(JSON.stringify(data));
      console.log('Response headers:');
      response.headers.forEach((value, key) => {
        console.log(`${key}: ${value}`);
      });
    }

  } catch (error) {
    console.log(error);
  }

  return accessToken;
}


export const searchTracks = async (searchTerms) => {
  try {
    // See: https://developer.spotify.com/documentation/web-api/reference/search
    const endpoint = '/search';
    const parameters = `?q=${searchTerms}&type=track&limit=50`;

    const url = spotifyApiBaseUrl + endpoint + parameters;

    let myAccessToken = await getAccessToken();
    console.log("myAccessToken: " + myAccessToken);

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'Authorization': 'Bearer ' + myAccessToken
      }
    };

    console.log("Options: ");
    console.log(options);

    const response = await fetch(url, options);

    if (response.ok) {
      const jsonResponse = await response.json();

      console.log('jsonResponse:');
      console.log(jsonResponse);

      // Extract and return the array of tracks:
      const trackList = jsonResponse["tracks"]["items"];

      console.log('trackList:');
      console.log(trackList);

      return trackList;
    } else {
      console.log('Spotify API request failed:');
      console.log(response);
    }
  } catch (error) {
    console.log(error);
  }
}

export const savePlaylistToSpotify = async (playlistTracksArray, token) => {
  // To access user account data, we can't use the token returned
  // from getAccessToken(); instead we must get the user to log in via
  // Spotify (this has now been added to App.js), and then that token
  // gets passed in as a parameter to this function.

  // 1. "To hit the necessary endpoints, you’ll need the user’s ID, you can make a request that returns the user’s Spotify username by making a request to https://api.spotify.com/v1/me."
  // 2. "To create a new playlist, you will need to make a POST request to the /v1/users/{user_id}/playlists endpoint. You can set the name and description of the new playlist in the request body."
  // 3. "To add tracks to the new playlist, you will need to make a POST request to the //v1/users/{user_id}/playlists/{playlist_id}/tracks endpoint. You can provide a list of track IDs in the request body to add them to the playlist."

  const userId = await getUserId(token);


}

const getUserId = async (token) => {
  try {
    // See: https://developer.spotify.com/documentation/web-api/reference/get-current-users-profile

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'Authorization': 'Bearer ' + token
      }
    };

    const response = await fetch(spotifyGetUserIdUrl, options);

    if (response.ok) {
      const jsonResponse = await response.json();

      console.log('jsonResponse:');
      console.log(jsonResponse);

      // Extract user ID:
      const userId = jsonResponse["id"];

      console.log('user ID:');
      console.log(userId);

      return userId;
    } else {
      console.log('Spotify API request failed:');
      console.log(response);
    }
  } catch (error) {
    console.log(error);
  }

  return undefined;
}
