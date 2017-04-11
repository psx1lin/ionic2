import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';


@Component({
    selector: 'page-contactdetails',
    templateUrl: 'contactdetails.html'
})

export class ContactDetails {
    private item;
    constructor(private navParams: NavParams) {
        this.item = navParams.data.item;
    }


}