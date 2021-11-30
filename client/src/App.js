import React from 'react';

import Hero from './components/Hero/DefaultHero';
import SearchPage from './components/Search/SearchPage';

import { Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="search-page" element={<SearchPage />} />
            </Routes>
        </div>
    );
}

export default App;
