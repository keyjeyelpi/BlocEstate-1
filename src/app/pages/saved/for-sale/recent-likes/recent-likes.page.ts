import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ModalController } from '@ionic/angular';
import { PropertyDetailsPage } from '../../../property-details/property-details.page';

@Component({
  selector: 'app-recent-likes',
  templateUrl: './recent-likes.page.html',
  styleUrls: ['./recent-likes.page.scss'],
})
export class RecentLikesPage implements OnInit {
  
  properties = [
    {
      id:  `recent-likes-1`,
      imageUrl: `assets/imgs/etc/property-1.jpg`,
      description: {
        address: `66 Corusant Way, King West, Toronto`,
        price: `$799,999 - Maintenance Fee $420`
      }
    },
    {
      id:  `recent-likes-2`,
      imageUrl: `assets/imgs/etc/property-2.jpg`,
      description: {
        address: `66 Corusant Way, King West, Toronto`,
        price: `$799,999 - Maintenance Fee $420`
      }
    }
  ]

  constructor( public modalController : ModalController ) { }

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
