import React, { useState } from 'react';
import axios from 'axios'
import SearchResult from './SearchResult';
import SearchBar from './SearchBar';
import SearchSuggestions from './SearchSuggestions';

const SearchPage = () => {
    const [songData, setSongData] = useState([]); //<-- Used to hold song data
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
                {isSearched ? <SearchResult songData={songData} /> : <div>Song not searched</div>}
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
};

export default SearchPage;
