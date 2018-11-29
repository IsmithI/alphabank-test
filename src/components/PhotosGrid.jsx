import React, { Component } from 'react'
import './Grid.css';
import Photo from './Photo';
import Loading from './loading/Loading';

export default class PhotosGrid extends Component {

	state = {
		loading: true,
		step: 10,
		page: 1
	}

	render() {
		const { step, page } = this.state;
		let photos = [...this.props.photos].slice(0, page * step);

		return this.state.loading ?
			<Loading />
			:
			<React.Fragment>
				<div className="grid" style={{ justifyContent: "center" }}>
					{photos.map((photo, i) => <Photo {...photo} key={i} />)}
				</div>
			</React.Fragment>
	}

	componentDidMount = () => {
		this.setState({ loading: false });
		window.addEventListener('scroll', this.onScroll, false);
	}

	componentWillUnmount = () => {
		this.setState({ loading: true });
		window.removeEventListener('scroll', this.onScroll, false);
	}


	onScroll = () => {
		if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - window.innerHeight / 2)) {
			this.setState({ page: this.state.page+1 });
		}
	}
}
