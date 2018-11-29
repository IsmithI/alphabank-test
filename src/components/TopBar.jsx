import React, { Component } from 'react'
import Router, { Match } from './Router';

import './TopBar.css';

export default class TopBar extends Component {

	state = {
		seachValue: ""
	}

	render() {
		const { seachValue } = this.state;
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
									<h3>{view.album.title}</h3>
								</div>
								<input
									type="text"
									className="search-input dark"
									placeholder="Type to search..."
									value={seachValue}
									onChange={this.updateSearchValue}
								/>
							</div>
						</div>
					</Match>

					<Match path="albums">
						<div className="navbar-text">
							<h4>Click an album to view it</h4>
						</div>
					</Match>
				</Router>

			</nav>
		)
	}

	updateSearchValue = e => {
		const value = e.target.value;

		this.setState({ seachValue: value });
		this.props.onSearchValueUpdate(value);
	}
}
