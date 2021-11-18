const SpotifyWebApi = require("spotify-web-api-node");
const { clientId, clientSecret } = require("../helpers/config");

// credentials are optional
const spotifyApi = new SpotifyWebApi({
  clientId,
  clientSecret,
  redirectUri: "http://www.example.com/callback",
});
