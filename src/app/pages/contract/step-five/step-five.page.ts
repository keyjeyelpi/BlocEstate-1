import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Globals } from 'src/app/classes/globals';
import { StepTwoPage } from '../step-two/step-two.page';
import { StepThreePage } from '../step-three/step-three.page';
import { StepFourPage } from '../step-four/step-four.page';
import { StepSixPage } from '../step-six/step-six.page';

@Component({
  selector: 'app-step-five',
  templateUrl: './step-five.page.html',
  styleUrls: ['./step-five.page.scss'],
})
export class StepFivePage implements OnInit {

  constructor(public modalController : ModalController, public navParams : NavParams, public globals : Globals) { }

  async closeModal() {
  this.modalController.dismiss({
    componentProps: {
      id : this.navParams.data.id
    }
  });
  }

  async goTO( pageNumber ) {

    var page

    if( pageNumber == 2 ) {
      page = StepTwoPage
    } else if( pageNumber == 3 ) {
      page = StepThreePage
    } else if( pageNumber == 4) {
      page = StepFourPage
    }

    this.closeModal();
    const modal = await this.modalController.create( {
      componentProps: {
        id : this.navParams.data.id
      },
      component: page
    } );
    return modal.present();
  }

  ngOnInit() {
    console.log( this.globals.contractInfo )
  }

}
