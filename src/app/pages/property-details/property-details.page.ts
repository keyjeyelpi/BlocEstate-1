import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import * as $ from 'jquery';
import { Globals } from 'src/app/classes/globals';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.page.html',
  styleUrls: ['./property-details.page.scss'],
})
export class PropertyDetailsPage implements OnInit {

  public propertyDetails: any
  public showFab: boolean

  constructor(
    public modalController: ModalController,
    public globals: Globals,
    public navParams: NavParams,
    public httpClient: HttpClient
  ) {
    this.httpClient.get("/assets/files/property.details.json").subscribe((data) => {
      this.propertyDetails = data
    })

    this.showFab = this.navParams.data.showFab
  }

  ngOnInit() {
  }

  closeModal( confirmation ) {
    ( confirmation ) ?
      (this.globals.toggleBlur(), this.modalController.dismiss( { componentProps: { id: this.navParams.data.id, confirmation: true } } ) ) :
      ( this.modalController.dismiss( { componentProps: { id: this.navParams.data.id, confirmation: false } } ) )
  }

  bookDate() {
    let booking = $('#booking-date');
    booking.click();
  }

}