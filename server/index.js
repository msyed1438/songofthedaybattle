const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const q = require('../helpers/querySpotify.js');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/api', (req, res) => {
	res.send({ data: 'peepeepoopoo check!' });
});

app.get('/api/song_search/:songName', async (req, res) => {
	let data = req.params.songName;
	console.log('THIS IS WHAT I AM SEARCHING FOR: ' + data);
	try {
		const query = await q.querySpotify(data);
		const filteredData = query.tracks.items.map((track) => {
			const albumArt = {
				smallAlbumArt: track.album.images[2],
				mediumAlbumArt: track.album.images[1],
				largeAlbumArt: track.album.images[0],
			};
			const previewUrl = track.preview_url;
			const trackName = track.name;
			const albumName = track.album.name;
			const artistName = track.album.artists[0].name;
			const albumLink = track.album.artists[0].external_urls.spotify;

			const resObj = {
				trackName,
				artistName,
				albumName,
				albumLink,
				previewUrl,
				albumArt,
			};

			return resObj;
		});
		res.json(filteredData);
	} catch (error) {
		res.send(error);
	}
});

app.listen(port, () => console.log(`Listening on port ${port}`));
