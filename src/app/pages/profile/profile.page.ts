import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EditProfilePage } from './edit-profile/edit-profile.page';

@Component( {
  selector: `app-profile`,
  templateUrl: `./profile.page.html`,
  styleUrls: [ `./profile.page.scss` ]
} )
export class ProfilePage implements OnInit {

  items : any = [
    {
      "name": "Notifications",
      "icon": "custom-icon-menu-notifications",
      "routerLink": ""
    },
    {
      "name": "Payment",
      "icon": "custom-icon-menu-payment",
      "routerLink": ""
    },
    {
      "name": "Contract Agreements",
      "icon": "custom-icon-menu-contract-agreements",
      "routerLink": ""
    },
    {
      "name": "Terms and Conditions",
      "icon": "custom-icon-menu-terms-and-conditions",
      "routerLink": ""
    },
    {
      "name": "Privacy Policy",
      "icon": "custom-icon-menu-privacy-policy",
      "routerLink": ""
    },
    {
      "name": "About Us",
      "icon": "custom-icon-menu-about-us",
      "routerLink": "/about-developers"
    },
    {
      "name": "Log Out",
      "icon": "custom-icon-menu-logout",
      "routerLink": ""
    }
  ]

  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {
  }



  async editProfile() {
    const modal = await this.modalController.create( {
      component: EditProfilePage
    } );
    return modal.present();
  }

}
