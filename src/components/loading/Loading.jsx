import React from 'react'
import img from './loader.gif'
import Modal from '../Modal';

const style = {
	width: "100%", 
	height: "100vh",
	backgroundColor: "rgba(1, 1, 1, 0.1)",
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
