import React, { Component } from 'react'

export default class TopBar extends Component {

	state = {
		seachValue: ""
	}

	render() {
		const { seachValue } = this.state;

		return (
			<nav className="navbar navbar-light bg-light">
				<span className="navbar-brand mb-0 h1">
					<input type="text" className="form-control" placeholder="Type to search..." value={seachValue} onChange={this.updateSearchValue} />
				</span>
			</nav>
		)
	}

	updateSearchValue = e => {
		const value = e.target.value;

		this.setState({ seachValue: value });
		this.props.onSearchValueUpdate(value);
	}
}
