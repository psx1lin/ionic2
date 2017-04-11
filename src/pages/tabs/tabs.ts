import { Component,ViewChild } from '@angular/core';
import {Tabs} from 'ionic-angular';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { DemoPage } from '../demo/demo';

@Component({
  
  templateUrl: 'tabs.html'
})

export class TabsPage {

  @ViewChild('myTabs') tabRef: Tabs;

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = DemoPage;






  constructor() {

  }

ionViewDidEnter(){

//  this.tabRef.select(1);
}

}
