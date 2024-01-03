## Starting a new project

* `npx create-react-app myapp` (app name must be all lowercase!)
* `cd myapp`
* `npm install bootstrap` (if Twitter Bootstrap is desired)
* `npm install whatwg-fetch --save` (if the polyfill for "fetch" is desired)
* `npm start` to rnun the app


## CORS Anywhere

* https://github.com/Rob--W/cors-anywhere
* Go to http://cors-anywhere.herokuapp.com/corsdemo, click "Request temporary access to the demo server"
* Then access the target API endpoint by prepending "https://cors-anywhere.herokuapp.com/" (and omitting the https:// from the target URL)
  * Example: https://cors-anywhere.herokuapp.com/api.yelp.com/v3/businesses/search


