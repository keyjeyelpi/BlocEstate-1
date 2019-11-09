import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as $ from 'jquery';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  public user_info: any = {
    "name": {
      "first": "KJ",
      "last": "Penaloza"
    },
    "about_me": "",
    "birthday": "1999-04-11",
    "phone_no": "+61 999 999 9999",
    "email": "kj.penaloza@gmail.com",
    "job": "Front-End Developer",
    "location": {
      "title": "",
      "description": ""
    },
    "photo": "assets/imgs/etc/dummy-profile-image.png"
  }
  
  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {
  }

  changeProfileAvatar() {
    $('ion-input#changeAvatar input').click();
  }

  path( event ) {
    console.log( event );
    this.user_info.photo = (window.URL ? URL : webkitURL).createObjectURL(event.files[0]);
    console.log(this.user_info.photo);
    }


  closeModal() {
    this.modalController.dismiss();
  }

}
