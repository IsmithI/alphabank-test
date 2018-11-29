import React, { Component } from 'react'
import '../Grid.css';
import Photo from './Photo';
import Loading from '../loading/Loading';
import NotFound from '../NotFound';

export default class PhotosGrid extends Component {

	state = {
		loaded: true,

		// Variables to handle dynamic rendering
		step: 10,
		page: 1
	}

	render() {
		const { step, page, loaded } = this.state;
		let photos = [...this.props.photos].slice(0, page * step);

		return (
			<React.Fragment>
				{!loaded ? <Loading /> : <React.Fragment />}

				<div className="grid" ref={el => this.gallery = el} style={{ justifyContent: "center" }}>
					
					{photos.length > 0 ?
						photos.map((photo, i) => <Photo {...photo} key={i} onLoad={this.handleImageLoad} />)
						:
						<NotFound />}

				</div>
			</React.Fragment>
		)
	}

	componentDidMount = () => {
		window.addEventListener('scroll', this.onScroll, false);
	}

	componentWillUnmount = () => {
		window.removeEventListener('scroll', this.onScroll, false);
	}

	/**
	 * When user scrolls down, we need to increase the amount of rendered images
	 */
	onScroll = () => {
		if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - window.innerHeight / 1.5)) {
			this.setState({ page: this.state.page + 1 });
		}
	}

	/**
	 * This is made to prevent blinking of the dom elements
	 * It takes some time to load images, so we need to wait a bit
	 * 
	 * And there is no need to display loading indicator when images are loaded after user scrolls
	 */
	handleImageLoad = () => {
		this.setState({ loaded: imagesLoaded(this.gallery) || this.state.page > 1 });
	}
}

function imagesLoaded(parentNode) {
	const imgElements = [...parentNode.querySelectorAll("img")];
	for (let i = 0; i < imgElements.length; i += 1) {
		const img = imgElements[i];
		if (!img.complete) {
			return false;
		}
	}
	return true;
}