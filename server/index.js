const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const q = require("../helpers/querySpotify.js");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/api", (req, res) => {
  res.send({ data: "peepeepoopoo check!" });
});

app.get("/api/song_search/:songName", async (req, res) => {
  let data = req.params.songName;
  console.log("THIS IS WHAT I AM SEARCHING FOR: " + data);
  try {
    const query = await q.querySpotify(data);
    // const filteredData = query.tracks.items.map((item) => {
    //   const trackName = item.name;
    //   const artistName = item.album.artists[0].name;
    //   const albumCover = item.images[1].url;
    //   const releaseDate = item.release_date;

    //   const responseObj = { trackName, artistName, albumCover, releaseDate };
    //   return responseObj;
    // });

    // console.log('This is the filteredData: ', filteredData)
    console.log("This is the result of the query: ", query);
    const firstItem = query.tracks.items[0];
    console.log("THis is the first item: ", firstItem);
    const smallAlbumArt = query.tracks.items[0].album.images[0];
    const mediumAlbumArt = query.tracks.items[0].album.images[1];
    const largeAlbumArt = query.tracks.items[0].album.images[2];

    const previewUrl = query.tracks.items[0].preview_url;
    const extractedSongName = query.tracks.items[0].name;
    const firstArtist = query.tracks.items[0].album.artists[0];
    const artistExtracted = query.tracks.items[0].album.artists[0].name;
    const albumLink =
      query.tracks.items[0].album.artists[0].external_urls.spotify;

    res.json({
      previewUrl,
      extractedSongName,
      artistExtracted,
      albumLink,
      smallAlbumArt,
      mediumAlbumArt,
      largeAlbumArt,
    });
    // res.json(firstItem)
  } catch (error) {
    res.send(error);
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));
