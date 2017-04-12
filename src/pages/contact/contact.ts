import { Component } from '@angular/core';
import { NavController,LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

private userinfo:any={};


  constructor(public navCtrl: NavController,
  	public loadingCtrl: LoadingController) {
    this.userinfo.user="";
    this.userinfo.password="";	
  }

  showFill(){
  	//alert(this.username);
  	//alert(this.userinfo.user + " "+ this.userinfo.password);
  	let loading=this.loadingCtrl.create({
		content:"正在登入",
		spinner:"bubbles",
		duration:3000
  	});

    loading.present();

  	setTimeout(()=>{
  		loading.dismiss()
  	},3000);

  }

}
