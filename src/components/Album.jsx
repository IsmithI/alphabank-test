
import React, { Component } from 'react'

import './Album.css';
import Photo from './Photo';

export default class Album extends Component {

	render() {
		const { title, topPhoto, photos } = this.props.data;
		
		return (
			<div className="album card">
				<Photo {...topPhoto} small/>
				<div className="card-body">
					<h5 className="card-title">{title}</h5>
					<h6 className="card-subtitle mb-2 text-muted">Photos: {photos.length}</h6>
				</div>
			</div>
		)
	}
}
