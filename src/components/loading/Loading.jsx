import React from 'react'
import img from './loader.gif'
import Modal from '../Modal';

const style = {
	top: 0,
	position: "fixed",
	width: "100%", 
	height: "100%",
	backgroundColor: "transparent",
	display: "flex",
	justifyContent: "center",
	alignItems: "center"
}

export default () => {
	return (
		<Modal>
			<div style={style}>
				<img src={img} alt="loading" />
			</div>
		</Modal>
	)
}
