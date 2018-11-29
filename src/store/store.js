import { observable, decorate, intercept } from 'mobx';

class ObservableStore {

	albums = [];
	filters = {
		title: a => true,
		album: a => true
	}
	view = {
		name: 'albums',
		album: { photos: [] }
	}

	constructor() {
		intercept(this, 'view', newValue => {
			window.scrollTo(0, 0);
			return newValue;
		})
	}

	set titleFilter(value) {
		this.filters.title = photo => photo.title.includes(value);
	}

	set albumFilter(albumId) {
		this.filters.album = photo => photo.albumId === albumId;
	}

	allPhotos = () => {
		let photos = [];
		// Extract photos from albums into one array
		this.albums.forEach(album => {
			photos = photos.concat(album.photos);
		});

		// Filter photos by applied filters
		Object.entries(this.filters).map(([key, filter]) => {
			return photos = photos.filter(filter);
		});

		return photos;
	}

	resetFilters = () => {
		this.filters.title = a => true;
		this.filters.album = a => true;
	}

}

decorate(ObservableStore, {
	albums: observable,
	filters: observable,
	view: observable
})

export default ObservableStore;