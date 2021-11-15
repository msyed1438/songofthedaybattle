import logo from './logo.svg';
import './App.css';

function App() {
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
			</header>
		</div>
	);
}

export default App;
