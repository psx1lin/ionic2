import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ContactDetails } from "../about/contactdetails";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  contacts = [{
    "id": "1.png",
    "name": "童干",
    "text": "你都死光"
  }, {
    "id": "2.png",
    "name": "周芸",
    "text": "死光"
  }, {
    "id": "4.png",
    "name": "床童干",
    "text": "你光"
  }

  ];
  constructor(public navCtrl: NavController) {

  }

  itemClick(event, contact) {
    // alert(contact.id);
    this.navCtrl.push(ContactDetails,{item:contact});

  }

}
