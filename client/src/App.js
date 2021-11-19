import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
const axios = require('axios');

function App() {
	const [data, setData] = useState([]);

	useEffect(() => {
		callBackendAPI();
	}, []);

	function callBackendAPI() {
		return axios
			.get('http://localhost:5000/express_backend')
			.then((res) => {
				console.log('Successfully called backend!');
				setData(res.data);
			})
			.catch((err) => console.log(err));
	}

	// function searchSpotifyTracks() {

	// }

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>See if your favorite song can win the battle of taste!</p>
				<div className="song-search">
					<input
						type="text"
						id="header-search"
						placeholder="Search for your favorite song..."
						name="s"
					/>
					<button type="submit">Search</button>
				</div>
				<p>tahsin says: {data.data}</p>
			</header>
		</div>
	);
}

export default App;
