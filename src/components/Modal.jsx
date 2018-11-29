import React from 'react'
import ReactDOM from 'react-dom'
const modalRoot = document.getElementById('modal-root');

/**
 * A custom Modal class
 * Did own implementation instead of bootstrap Modal to learn Portals
 */
export default class Modal extends React.Component {

	constructor(props) {
		super(props);
		this.el = document.createElement('div');
	}

	componentDidMount = () => {
		modalRoot.appendChild(this.el);
	}

	render() {
		return (
			ReactDOM.createPortal(
				this.props.children,
				this.el
			)
		)
	}

	componentWillUnmount = () => {
		modalRoot.removeChild(this.el);
	}

}
