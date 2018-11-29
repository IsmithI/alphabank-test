
import React, { Component } from 'react'

import {AlbumCover} from '../photo/Photo';

export default class Album extends Component {

	render() {
		const { onAlbumChoose } = this.props;
		const { title, topPhoto, photos } = this.props.data;
		
		return (
			<div className="card" onClick={() => onAlbumChoose(this.props.data)}>
				<AlbumCover {...topPhoto} small/>
				<div className="card-body">
					<h5 className="card-title">{title}</h5>
				</div>
				<h6 className="card-subtitle text-muted">Photos: {photos.length}</h6>
			</div>
		)
	}
}
