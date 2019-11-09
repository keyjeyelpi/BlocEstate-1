import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Globals } from 'src/app/classes/globals';
import { StepThreePage } from '../step-three/step-three.page';

@Component( {
  selector : 'app-step-two' ,
  templateUrl : './step-two.page.html' ,
  styleUrls : ['./step-two.page.scss' ] ,
} )
export class StepTwoPage implements OnInit {


  constructor(public modalController : ModalController, public navParams : NavParams, public globals : Globals) { }

  async closeModal() {
    this.modalController.dismiss();
  }

  async nextStep() {
    this.closeModal();
    const modal = await this.modalController.create( {
      componentProps: {
        id : this.navParams.data.id
      },
      component: StepThreePage
    } );
    return modal.present();
  }

  ngOnInit() {
  }

}
