import React, { Component } from 'react';
import './App.css';

import Loading from './components/loading/Loading';
import AlbumsGrid from './components/AlbumsGrid';
import TopBar from './components/TopBar'
import PhotosGrid from './components/PhotosGrid'

import Album from './store/album';
import Axios from 'axios';
import { observer } from 'mobx-react';
import Router, { Match } from './components/Router';

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
				<TopBar
					view={store.view}
					onSearchValueUpdate={this.updateFilter}
					onHomeButtonClick={this.toHomeView}
				/>

				<div className="container-fluid" style={{ marginTop: 72 }}>
					<main>
						<Router path={store.view.name}>
							<Match path="albums">
								<AlbumsGrid
									albums={store.albums}
									onAlbumChoose={this.chooseAlbum}
								/>
							</Match>
							<Match path="photos">
								<PhotosGrid
									photos={store.allPhotos([store.filter, (photo) => photo.albumId === store.view.album.id])}
								/>
							</Match>
						</Router>
					</main>
				</div>
			</React.Fragment >
			:
			<Loading />
	}

	updateFilter = searchValue => {
		this.props.store.titleFilter = searchValue;
	}

	chooseAlbum = album => {
		window.scrollTo(0, 0);
		this.props.store.view = {
			name: "photos",
			album
		}
	}

	toHomeView = () => {
		this.props.store.view = {
			name: 'albums',
			album: {}
		}
	}

	componentWillMount = () => {
		Axios.get(`${API}/albums`)
			.then(albums => {

				Axios.get(`${API}/photos`).then(photos => {
					this.props.store.albums = albums.data.map(a => {
						const album = new Album({ ...a });
						album.photos = photos.data.filter(p => p.albumId === album.id);

						return album;
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
