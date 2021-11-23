import React from 'react';
import logo from '../../assets/logo.svg';

import { Link } from 'react-router-dom';

const DefaultHero = () => {
    return (
        <div className="border-8 border-green-600">
            <img src={logo} className="App-logo" alt="logo" />
            <p className="border border-fuchsia-800">
                See if your favorite song can win the battle of taste!
            </p>
            <button> <Link to="/search-page">  Nominate your song!</Link> </button>
        </div>
    );
};

export default DefaultHero;
