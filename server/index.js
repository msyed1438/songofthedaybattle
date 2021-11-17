const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/express_backend', (req, res) => {
	console.log('in the get!');
	res.send({ data: 'peepeepoopoo' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
