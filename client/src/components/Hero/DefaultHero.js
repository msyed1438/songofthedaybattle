import React from 'react';
import logo from '../../assets/logo.svg';

const DefaultHero = () => {
	return (
		<div className="border-8 border-green-600">
			<img src={logo} className="App-logo" alt="logo" />
			<p className="border border-fuchsia-800">
				See if your favorite song can win the battle of taste!
			</p>
		</div>
	);
};

export default DefaultHero;
