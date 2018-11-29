import React from 'react'


/**
 * Simple router that renders components that are wrapped with the matching component
 */
export default props => {
	return React.Children.map(props.children, (child, i) => {

		// Inject 'currentPath' property to each child
		return React.cloneElement(child, {
			currentPath: props.path
		})
	})
}


/**
 * A component that renders it's children only if value is matched with the path
 */
export function Match(props) {
	return props.path === props.currentPath || props.all ? props.children : null;
}
