import React from 'react'

export default class SearchBar extends React.Component {

	state = { value: "" }

	render() {
		const { value } = this.state;
		const { onUpdate } = this.props;

		return (
			<React.Fragment>
				<span className="mr-2 ml-2">
					<i className="fas fa-search"></i>
				</span>
				<input
					type="text"
					className="search-input"
					placeholder="Type to search..."
					value={value}
					onChange={this.updateInput}
					autoFocus={true}
				/>
			</React.Fragment>
		)
	}

	updateInput = e => {
		const value = e.target.value;

		this.setState({value});
		this.props.onUpdate(value);
	}

	resetInput = () => {
		this.setState({value: ""});
		this.props.onUpdate("");
	}
}