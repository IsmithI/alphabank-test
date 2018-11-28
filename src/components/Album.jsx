
import React, { Component } from 'react'

import './Album.css';
import Photo from './Photo';

export default class Album extends Component {

	render() {
		const { title, topPhoto } = this.props.data;
		
		return (
			<div className="album card">
				<Photo {...topPhoto} small/>
				<div className="card-body">
					<h5 className="card-title">{title}</h5>
				</div>
			</div>
		)
	}
}
