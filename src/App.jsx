import React, { Component } from 'react';
import './App.css';

import Loading from './components/loading/Loading';
import AlbumsGrid from './components/album/AlbumsGrid';
import TopBar from './components/topBar/TopBar'
import PhotosGrid from './components/photo/PhotosGrid'

import Album from './store/album';
import Axios from 'axios';
import { observer } from 'mobx-react';
import Router, { Match } from './components/Router';

const API = 'https://jsonplaceholder.typicode.com';
class App extends Component {

	constructor(props) {
		super(props);

		this.state = { loaded: false }

		// Reference to reset search value in top bar
		this.topBar = React.createRef();
	}

	render() {
		const { store } = this.props;
		const { loaded } = this.state;

		return loaded ?
			<React.Fragment>
				<TopBar
					ref={this.topBar}
					view={store.view}
					onSearchValueUpdate={this.updateTitleFilter}
					onHomeButtonClick={this.toHomeView}
				/>

				<div className="container" style={{ marginTop: "100px" }}>
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
									photos={store.allPhotos()}
								/>
							</Match>
						</Router>
					</main>
				</div>
			</React.Fragment >
			:
			<Loading />
	}

	updateTitleFilter = searchValue => {
		this.props.store.titleFilter = searchValue;
		this.props.store.view.name = "photos";
	}

	chooseAlbum = album => {
		this.props.store.albumFilter = album.id;
		this.props.store.view = {
			name: "photos",
			album
		}
	}

	toHomeView = () => {
		this.props.store.resetFilters();
		this.topBar.current.resetSearchValue();
		this.props.store.view = {
			name: 'albums',
			album: { photos: [] }
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

	/**
	 * A predicate to determine that photo belongs to the current albumn
	 */
	byAlbumId = photo => {
		const { store } = this.props;
		return photo.albumId === store.view.album.id;
	}

}

/**
 * Added new method to Array class
 * returns last element from array but not removes it (like pop())
 */
Array.prototype.peek = function () {
	return this[this.length - 1];
}

export default observer(App);
