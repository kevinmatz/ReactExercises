# "Jammming" React app

This is a React.js app developed as a final independent project for Codecademy's "Create a Front-End App with React" course. It integrates with the Spotify API, letting a user log in to Spotify to grant access to the app, and then the user can search for songs/tracks, add them to a playlist, and then save the playlist to their Spotify account.

Screenshots:

<img src="./demo_screenshots/Jammming%20demo%200001.PNG" alt="Demo screenshot 1" width="700"/>
<img src="./demo_screenshots/Jammming%20demo%200002.PNG" alt="Demo screenshot 2" width="700"/>
<img src="./demo_screenshots/Jammming%20demo%200005.PNG" alt="Demo screenshot 5" width="700"/>
<img src="./demo_screenshots/Jammming%20demo%200007.PNG" alt="Demo screenshot 7" width="700"/>

* To run locally:
  * The file `secrets/SpotifyApiKey.js` has not been checked into the repository as it contains the Spotify API access secrets. Recreate this file as shown below.
  * The `node-modules` directory has been excluded from the Git repository; I believe these can be restored as follows:
    * `npm install react`
    * `npm install bootstrap`
  * In the project directory, run `npm start`
  * Open [http://localhost:3000](http://localhost:3000)
  * Click on the link at the bottom of the page to open the CORS Anywhere Demo page, [https://cors-anywhere.herokuapp.com/corsdemo](https://cors-anywhere.herokuapp.com/corsdemo), and click "Request temporary access to the demo server" to allow the app to connect to Spotify from localhost without CORS issues


* `secrets/SpotifyApiKey.js` should take the following format:

```
const clientId = '...';
const clientSecret = '...';
export function getClientId() {
 return clientId;
}
export function getClientSecret() {
  return clientSecret;
}
```
