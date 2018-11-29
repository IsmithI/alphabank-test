import { observable, decorate } from 'mobx';

class ObservableStore {

	albums = [];
	filter = a => true;
	view = {
		name: 'albums',
		album: {}
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