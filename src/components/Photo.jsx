import React from 'react'
import './Photo.css'

export default props => {
	const { url, thumbnailUrl, title, small, onLoad } = props;
	return (
		<div className="photo">
			<img 
				className="img" 
				src={small ? thumbnailUrl : url} 
				alt={title}
				onLoad={onLoad}
			/>
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