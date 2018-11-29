import React, { Component } from 'react'
import Album from './Album';

import '../Grid.css';

export default class AlbumsGrid extends Component {
	render() {
		const { albums, onAlbumChoose } = this.props;

		return (
			<div className="grid">
				{ albums.map((album, i) => <Album data={album} key={i} onAlbumChoose={onAlbumChoose} />)}
			</div>
		)
	}
}
