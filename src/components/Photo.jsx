import React from 'react'
import './Photo.css'

export default props => {
	const { url, thumbnailUrl, title, small } = props;
	return (
		<div className="photo">
			<img className="img" src={small ? thumbnailUrl : url} alt={title} />
			<div className="photo-title">{title}</div>
		</div>
	)
}


export function AlbumCover(props) {
	const { url, thumbnailUrl, title, small } = props;
	return (
		<img className="card-img-top" src={small ? thumbnailUrl : url} alt={title} />
	)
}