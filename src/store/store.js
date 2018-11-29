import { observable, decorate, intercept } from 'mobx';

class ObservableStore {

	albums = [];
	filter = a => true;
	view = {
		name: 'albums',
		album: {}
	}

	constructor() {
		intercept(this, 'view', newValue => {
			window.scrollTo(0, 0);
			return newValue;
		})
	}

	set titleFilter(value) {
		this.filter = album => album.title.includes(value);
	}

	allPhotos = (filters = []) => {
		let photos = [];
		this.albums.forEach(album => {
			photos = photos.concat(album.photos);
		});

		filters.forEach(filter => {
			photos = photos.filter(filter);
		});

		return photos;
	}
}
decorate(ObservableStore, {
	albums: observable,
	filter: observable,
	view: observable
})

export default ObservableStore;