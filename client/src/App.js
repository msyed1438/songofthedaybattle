import React from 'react';

import Hero from './components/Hero/DefaultHero';
import SearchPage from './components/Search/SearchPage';

import { Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Hero />}>
                    <Route index element={<Hero />} />

                    {/* <Route path="dashboard" element={<Dashboard />} /> */}

                    {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
                    <Route path="*" element={<div> No matching page</div>} />
                </Route>
                <Route path="search-page" element={<SearchPage />} />
            </Routes>
        </div>
    );
}

export default App;
