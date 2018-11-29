import React, { Component } from 'react'
import Router, { Match } from '../Router';

import './TopBar.css';

export default class TopBar extends Component {

	state = { searchValue: "" }

	render() {
		const { searchValue } = this.state;
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
								<div className="navbar-text">
									<span className="mr-2 ml-2">
										<i className="fas fa-search"></i>
									</span>
									<input
										type="text"
										className="search-input dark"
										placeholder="Type to search..."
										value={searchValue}
										onChange={this.updateSearchValue}
										autoFocus={true}
									/>
								</div>
							</div>
						</div>
					</Match>

					{/* If user doesn't select an album, show hint */}
					<Match path="albums">
						<div className="collapse navbar-collapse" id="collapsibleNavbar">
							<div className="navbar-container">
								<div className="navbar-text">
									<h4>Click an album to view it</h4>
								</div>
								<div className="navbar-text">
									<span className="mr-2 ml-2">
										<i className="fas fa-search"></i>
									</span>
									<input
										type="text"
										className="search-input dark"
										placeholder="Type to search..."
										value={searchValue}
										onChange={this.updateSearchValue}
										autoFocus={true}
									/>
								</div>
							</div>
						</div>
					</Match>
				</Router>

			</nav>
		)
	}

	/**
	 * A function to update input and call outer function in order to filter photoes
	 */
	updateSearchValue = e => {
		const value = e.target.value;

		this.setState({ searchValue: value });
		this.props.onSearchValueUpdate(value);
	}

	resetSearchValue = () => {
		this.setState({ searchValue: "" });
		this.props.onSearchValueUpdate("");
	}
}
