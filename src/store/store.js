import { observable, decorate, computed } from 'mobx';

class ObservableStore {

	albums = [];
	filter = a => true;

	set titleFilter(value) {
		this.filter = album => album.title.includes(value);
	}

}
decorate(ObservableStore, {
	albums: observable,
	filter: observable
})

export default ObservableStore;