import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SigninPage } from '../signin/signin.page';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

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

  async signin() {
    this.closeModal();
    const modal = await this.modalController.create( { component: SigninPage } );
    return modal.present();
  }

}
