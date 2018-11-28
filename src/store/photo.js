import { decorate, observable } from "mobx";

class Photo {

	url = '';

}

decorate(Photo, {
	url: observable
})

export default Photo;