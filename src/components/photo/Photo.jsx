import React from 'react'
import './Photo.css'

export default class Photo extends React.Component {

	state = { loaded: false }

	render() {
		const { loaded } = this.state;
		const { url, thumbnailUrl, title, small } = this.props;

		return (
			<div className="photo">
				<img
					className="img"
					src={small ? thumbnailUrl : url}
					alt={title}
					onLoad={this.onLoad}
				/>
				{loaded ? <div className="photo-title">{title}</div> : <React.Fragment />}

			</div>
		)
	}

	/**
	 * To handle image load
	 */
	onLoad = () => {
		this.setState({ loaded: true });
		this.props.onLoad();
	}
}


export function AlbumCover(props) {
	const { url, thumbnailUrl, title, small } = props;
	return (
		<img className="card-img-top" src={small ? thumbnailUrl : url} alt={title} />
	)
}