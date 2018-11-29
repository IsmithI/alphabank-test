import React from 'react'

export default props => {
	return React.Children.map(props.children, (child, i) => {
		return React.cloneElement(child, {
			currentPath: props.path
		})
	})
}

export function Match(props) {
	return props.path === props.currentPath ? props.children : <React.Fragment />;
}
