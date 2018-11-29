
import React, { Component } from 'react'

import './Album.css';
import {AlbumCover} from './Photo';

export default class Album extends Component {

	render() {
		const { onAlbumChoose } = this.props;
		const { id, title, topPhoto, photos } = this.props.data;
		
		return (
			<div className="album card" onClick={() => onAlbumChoose(id)}>
				<AlbumCover {...topPhoto} small/>
				<div className="card-body">
					<h5 className="card-title">{title}</h5>
				</div>
				<h6 className="card-subtitle mb-2 text-muted">Photos: {photos.length}</h6>
			</div>
		)
	}
}
