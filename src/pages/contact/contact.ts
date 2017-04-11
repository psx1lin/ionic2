import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController, ToastController, ModalController } from 'ionic-angular';
import { Register } from "../contact/register";
import { ImagePicker } from "@ionic-native/image-picker";


@Component({
	selector: 'page-contact',
	templateUrl: 'contact.html'
})
export class ContactPage {

	private userinfo: any = {};


	constructor(public navCtrl: NavController,
		public loadingCtrl: LoadingController,
		private alterCtrl: AlertController,
		private toastCtrl: ToastController,
		public modalCtrl: ModalController,
		private imagePicker: ImagePicker) {
		this.userinfo.user = "";
		this.userinfo.password = "";
		this.userinfo.headface = "../images/person3.jpg";

	}

	login() {
		if (this.userinfo.user == '' || this.userinfo.user.length <= 3) {
			// let alertUserNameErroe = this.alterCtrl.create({
			// 	title: "用戶中心",
			// 	subTitle: "使用者不能空白",
			// 	buttons: ["ok"]
			// });
			// alertUserNameErroe.present();
			let toast = this.toastCtrl.create({
				message: "使用者不能空白",
				duration: 2000
			});
			toast.present();

		}
		else {
			//alert(this.username);
			//alert(this.userinfo.user + " "+ this.userinfo.password);
			let loading = this.loadingCtrl.create({
				content: "正在登入",
				spinner: "bubbles",
				duration: 3000
			});

			loading.present();

			setTimeout(() => {
				loading.dismiss()
			}, 3000);
		}

	}


	openRegisterPage() {
		var modal = this.modalCtrl.create(Register);
		modal.present();

	}

	uploadImage() {
		let options = {
			maximumimagescount: 2,
			width: 30,
			height: 30,
			quality: 80
		};

		console.log("uploadImage start");

		this.imagePicker.getPictures(options).then((results) => {
			console.log("results:" + results);
			for (var index = 0; index < results.length; index++) {
				this.userinfo.headface = results[index];
			}
		}, (err) => {
			console.log("err:" + err);
			alert(err)
		})



	}

}
