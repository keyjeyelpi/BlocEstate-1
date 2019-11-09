import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ModalController } from '@ionic/angular';
import { PropertyDetailsPage } from '../../../property-details/property-details.page';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  properties = [
    {
      id: `favorites-1`,
      imageUrl: `assets/imgs/estate/3.jpg`,
      description: {
        address: `66 Corusant Way, King West, Toronto`,
        price: `$799,999 - Maintenance Fee $420`
      }
    },
    {
      id: `favorites-2`,
      imageUrl: `assets/imgs/estate/4.jpg`,
      description: {
        address: `66 Corusant Way, King West, Toronto`,
        price: `$799,999 - Maintenance Fee $420`
      }
    },
    {
      id: `favorites-3`,
      imageUrl: `assets/imgs/estate/2.jpg`,
      description: {
        address: `66 Corusant Way, King West, Toronto`,
        price: `$799,999 - Maintenance Fee $420`
      }
    },
    {
      id: `favorites-4`,
      imageUrl: `assets/imgs/estate/1.jpg`,
      description: {
        address: `66 Corusant Way, King West, Toronto`,
        price: `$799,999 - Maintenance Fee $420`
      }
    },
  ]

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  animateCard( id ) {
    let animation: string = `slideUp`

    $( '#' + id ).addClass('magictime');
    $( '#' + id ).addClass(animation);

    setTimeout(() => {
      $( '#' + id ).removeClass(animation);
    }, 750);
  }

  async showPropertyDetails( propertyDetails ) {
    this.animateCard( propertyDetails.id )

    const modal = await this.modalController.create({
      component: PropertyDetailsPage,
      componentProps: {
        details : propertyDetails
      }
    });

    setTimeout(() => {      
      return modal.present();
    }, 750);
  }
}
