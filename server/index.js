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

app.put('/api/song_search/:songName', async (req, res) => {
	let data = req.params.songName;
	console.log('THIS IS WHAT I AM SEARCHING FOR: ' + data);
	try {
		const query = await q.querySpotify(data);
		res.json(query);
	} catch (error) {
		res.send(error);
	}
});

app.listen(port, () => console.log(`Listening on port ${port}`));
