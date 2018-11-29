import { decorate, observable, computed } from "mobx";

class Album {

	id = -1
	title = ''
	photos = []

	constructor({ id, title, photos = [] }) {
		this.id = id;
		this.title = title;
		this.photos = photos;
	}

	get topPhoto() {
		return this.photos[0];
	}

}

decorate(Album, {
	photos: observable,
	title: observable,
	topPhoto: computed
})

export default Album;