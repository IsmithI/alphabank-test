import React from 'react'
import './Photo.css'

export default props => {
	const { url, thumbnailUrl, title, small } = props;
	return (
		<img className="img" src={small ? thumbnailUrl : url} alt={title} />
	)
}


export function AlbumCover(props) {
	const { url, thumbnailUrl, title, small } = props;
	return (
		<img className="card-img-top" src={small ? thumbnailUrl : url} alt={title} />
	)
}