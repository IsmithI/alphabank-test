import React, { Component } from 'react'
import Router, { Match } from '../Router';

import './TopBar.css';
import SearchBar from './SearchBar';

export default class TopBar extends Component {


	render() {
		const { view, onHomeButtonClick } = this.props;

		return (
			<nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">

				<Router path={view.name}>
					<Match path="photos">

						<button className="btn btn-primary" onClick={onHomeButtonClick} style={{ marginRight: 12 }}>
							<i className="fas fa-home"></i>
						</button>
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
							<span className="navbar-toggler-icon"></span>
						</button>

						<div className="collapse navbar-collapse" id="collapsibleNavbar">
							<div className="navbar-container">
								<div className="navbar-text">
									<h3>{view.album.title ? view.album.title : "Search in all albums"}</h3>
								</div>
							</div>
						</div>
					</Match>

					{/* If user doesn't select an album, show hint */}
					<Match path="albums">
						<div className="navbar-text">
							<h4>Click an album to view it</h4>
						</div>
					</Match>
				</Router>

			</nav>
		)
	}

	
}
