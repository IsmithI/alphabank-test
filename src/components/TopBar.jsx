import React, { Component } from 'react'

export default class TopBar extends Component {

	state = {
		seachValue: ""
	}

	render() {
		const { seachValue } = this.state;

		return (
			<nav className="navbar navbar-dark bg-dark fixed-top">

				<button className="btn btn-primary" onClick={this.props.onHomeButtonClick}>
					<i className="fas fa-home"></i>
				</button>
				<input type="text" className="search-input dark" placeholder="Type to search..." value={seachValue} onChange={this.updateSearchValue} />

			</nav>
		)
	}

	updateSearchValue = e => {
		const value = e.target.value;

		this.setState({ seachValue: value });
		this.props.onSearchValueUpdate(value);
	}
}
