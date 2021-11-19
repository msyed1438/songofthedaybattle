const SpotifyWebApi = require("spotify-web-api-node");
const { clientId, clientSecret } = require("../helpers/config");

console.log(
  "Here are the secrets: Client id ->",
  clientId,
  "and client secret: ",
  clientSecret
);

// credentials are optional
const spotifyApi = new SpotifyWebApi({
  clientId,
  clientSecret,
  redirectUri: "http://www.example.com/callback",
});

const querySpotify = (queryString) => {
  return spotifyApi
    .clientCredentialsGrant()
    .then(
      (data) => {
        console.log("The access token expires in " + data.body["expires_in"]);
        console.log("The access token is " + data.body["access_token"]);

        // Save the access token so that it's used in future calls
        spotifyApi.setAccessToken(data.body["access_token"]);
      },
      (err) => {
        console.log(
          "Something went wrong when retrieving an access token: " + err
        );
      }
    )
    .then(() => spotifyApi.searchTracks(queryString))
    .then((data) => {
      return data.body;
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { querySpotify };
