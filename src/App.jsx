import React, { Component } from 'react';
import './App.css';

import Loading from './components/loading/Loading';
import AlbumsGrid from './components/AlbumsGrid';
import TopBar from './components/TopBar'

import Album from './store/album';
import Axios from 'axios';
import { decorate } from 'mobx';
import { observer } from 'mobx-react';

const API = 'https://jsonplaceholder.typicode.com';
class App extends Component {

	constructor(props) {
		super(props);

		this.state = { loaded: false }
	}

	render() {
		const { store } = this.props;
		const { loaded } = this.state;

		return loaded ?
			<React.Fragment>
				<TopBar onSearchValueUpdate={this.updateFilter} />

				<div className="container-fluid">
					<main>
						<AlbumsGrid albums={store.albums.filter(store.filter)} />
					</main>
				</div>
			</React.Fragment >
			:
			<Loading />
	}

	updateFilter = searchValue => {
		this.props.store.titleFilter = searchValue;
	}

	componentWillMount = () => {
		Axios.get(`${API}/albums`)
			.then(albums => {

				Axios.get(`${API}/photos`).then(photos => {
					albums.data.map(a => {
						const album = new Album({ ...a });
						album.photos = photos.data.filter(p => p.albumId === album.id);

						this.props.store.albums.push(album);
					});
					this.setState({ loaded: true });
				})
			});
	}

}

Array.prototype.peek = function () {
	return this[this.length - 1];
}

export default observer(App);
