import React from 'react'

export default props => {
	const { value, onUpdate } = props;

	return (
		<React.Fragment>
			<span className="mr-2 ml-2">
				<i className="fas fa-search"></i>
			</span>
			<input
				type="text"
				className="search-input dark"
				placeholder="Type to search..."
				value={value}
				onChange={onUpdate}
				autoFocus={true}
			/>
		</React.Fragment>
	)
}
