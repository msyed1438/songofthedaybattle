import React from 'react';

const SearchBar = ({
	searchInput,
	handleChange,
	handleKeypress,
	handleClick,
}) => {
	return (
		<div className="song-search">
			<input
				type="text"
				id="header-search"
				placeholder="Search for your favorite song..."
				value={searchInput}
				onChange={handleChange}
				onKeyPress={handleKeypress}
			/>
			<button onClick={handleClick}>Search</button>
		</div>
	);
};

export default SearchBar;
