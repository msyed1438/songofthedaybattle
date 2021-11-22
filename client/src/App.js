import React, { useState } from 'react';
import Hero from './components/Hero/DefaultHero';

import SearchResult from './components/Search/SearchResult';
import SearchBar from './components/Search/SearchBar';
import SearchSuggestions from './components/Search/SearchSuggestions';

import './App.css';
const axios = require('axios');

function App() {
    const [songData, setSongData] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [isSearched, setIsSearched] = useState(false);

    function searchSpotifyTracks(songName) {
        const data = axios
            .get(`http://localhost:5000/api/song_search/${songName}`)
            .then((res) => {
                console.log('Successfully found songs');
                setSongData(res);
            })
            .catch((err) => console.log(err));
        return data;
    }

    function handleChange(e) {
        setSearchInput(e.target.value);
    }

    function handleKeypress(e) {
        if (e.key === 'Enter') {
            handleClick(e);
            setSearchInput('');
        }
    }

    async function handleClick(e) {
        e.preventDefault();
        await searchSpotifyTracks(searchInput);
        setIsSearched(true);
    }

    return (
        <div className="border-8 border-indigo-600">
            <div className="border-8 border-red-600">
                {isSearched ? <SearchResult songData={songData} /> : <Hero />}
                <SearchBar
                    searchInput={searchInput}
                    handleChange={handleChange}
                    handleKeypress={handleKeypress}
                    handleClick={handleClick}
                />
                {isSearched ? <SearchSuggestions songData={songData} /> : null}
            </div>
        </div>
    );
}

export default App;
