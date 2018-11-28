import React from 'react'
import './Photo.css'

export default props => {
	const { url, thumbnailUrl, title, small } = props;
	return (
		<div className="photo">
			<img src={small ? thumbnailUrl : url} alt={title} />
		</div>
	)
}
