import { Component } from '@angular/core';
import { ImagePicker } from '@ionic-native/image-picker';

 


@Component({
	selector: 'page-demo',
	templateUrl: 'demo.html'
})

export class DemoPage {


	private options;

	constructor(private imagePicker:ImagePicker) {
		this.options = {
			maximumImagesCount: 8
		}
	}


	getPhotos() {
		
		alert("fuck");
		// this.imagePicker.getPictures(this.options).then((results) => {
		// 	for (var i = 0; i < results.length; i++) {
		// 		console.log('Image URI: ' + results[i]);
		// 	}
		// }, (err) => { });
	}


}