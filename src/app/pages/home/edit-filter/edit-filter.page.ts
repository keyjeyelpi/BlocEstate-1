import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SignupPage } from '../../signup/signup.page';
import * as $ from 'jquery';

@Component({
  selector: 'app-edit-filter',
  templateUrl: './edit-filter.page.html',
  styleUrls: ['./edit-filter.page.scss'],
})
export class EditFilterPage implements OnInit {

  listType: string = 'sale';
  buildingType: string = 'house';
  priceRange: any = { lower: 0, upper: 1000000 };
  priceRangeMin: number = 0;
  priceRangeMax: number = 1000000;
  currentMin: number;
  currentMax: number;
  buildings: any = [
    {"type": "house", "icon": "house"},
    {"type": "condo", "icon": "condominium"},
    {"type": "apartment", "icon": "apartment"}
  ]

  constructor(
    public modalController: ModalController
  ) {
    this.currentMin = this.priceRangeMin;
    this.currentMax = this.priceRangeMax;
  }

  ngOnInit() {
    $('ion-card.ion-type ion-text').append( 'hi' );
  }

  closeModal() {
    this.modalController.dismiss();
  }

  changeRangeValues(priceRange) {
    this.currentMin = priceRange.lower;
    this.currentMax = priceRange.upper;
  }

  async signup() {
    const modal = await this.modalController.create( {
      component: SignupPage
    } );
    return modal.present();
  }

}
