import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SignupPage } from '../signup/signup.page';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  passwordType: string = 'password'
  passwordShown: boolean = false
  passwordEye: string = 'eye-off'

  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {
  }

  togglePassword() {
    ( this.passwordShown ) ?
      ( this.passwordShown = false, this.passwordType = 'password', this.passwordEye = 'eye-off' ) :
      ( this.passwordShown = true, this.passwordType = 'text', this.passwordEye = 'eye' ) 
  }

  closeModal() {
    this.modalController.dismiss();
  }

  async signup() {
    this.closeModal();
    const modal = await this.modalController.create( { component: SignupPage } );
    return modal.present();
  }

}
