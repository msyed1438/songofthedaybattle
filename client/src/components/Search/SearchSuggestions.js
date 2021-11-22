import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

const SearchSuggestions = ({ songData }) => {
	return (
		<div>
			<ul>
				<h3>Other suggestions: </h3>
				{songData.data.slice(1, 10).map((items) => {
					return (
						<div>
							<div className="song-list">
								<a
									target="_blank"
									rel="noopener noreferrer"
									href={items.albumLink}
								>
									<img
										src={items.albumArt.smallAlbumArt.url}
										className="album-art"
										alt="album-art"
									/>
								</a>
								<div>
									<h5>{items.trackName}</h5>
									<h5>{items.artistName}</h5>
									<ReactAudioPlayer
										src={items.previewUrl}
										className="audio-player"
										controls
									/>
								</div>
							</div>
						</div>
					);
				})}
			</ul>
		</div>
	);
};

export default SearchSuggestions;
