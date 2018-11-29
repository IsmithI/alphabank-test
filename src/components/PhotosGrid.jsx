import React, { Component } from 'react'
import './Grid.css';
import Photo from './Photo';
import Loading from './loading/Loading';

export default class PhotosGrid extends Component {

	state = {
		loaded: true,
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
						<div className="text-center text-muted">
							<h2>Nothing is found by your request!</h2>
						</div>
					}
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

	onScroll = () => {
		if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - window.innerHeight / 2)) {
			this.setState({ page: this.state.page + 1 });
		}
	}

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