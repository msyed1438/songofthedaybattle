import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

const SearchResult = ({ songData }) => {
	return (
		<div className="border-8 border-green-600">
			<a
				target="_blank"
				rel="noopener noreferrer"
				href={songData.data[0].albumLink}
			>
				<img
					src={songData.data[0].albumArt.mediumAlbumArt.url}
					className="album-art"
					alt="album-art"
				/>
			</a>
			<div>
				<h2>{songData.data[0].trackName}</h2>
				<h4>{songData.data[0].artistName}</h4>
				<ReactAudioPlayer
					src={songData.data[0].previewUrl}
					className="audio-player"
					autoPlay
					controls
				/>
			</div>
		</div>
	);
};

export default SearchResult;
