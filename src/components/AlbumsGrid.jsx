import React, { Component } from 'react'
import Album from '../components/Album';

import './Grid.css';

export default class AlbumsGrid extends Component {
	render() {
		const { albums } = this.props;

		return (
			<div className="grid">
				{ albums.map((album, i) => <Album data={album} key={i} />)}
			</div>
		)
	}
}
