import { Component } from '@angular/core';
import * as $ from 'jquery';
import { ModalController } from '@ionic/angular';
import { PropertyDetailsPage } from '../property-details/property-details.page';
import { RecentLikesPage } from './for-sale/recent-likes/recent-likes.page';
import { FavoritesPage } from './for-sale/favorites/favorites.page';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.page.html',
  styleUrls: ['./saved.page.scss'],
})
export class SavedPage {

  content: any = {}

  properties = {
    likes: [
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
    ],
    favorites: [
      {
        id:  `favorites-1`,
        imageUrl: `assets/imgs/estate/3.jpg`,
        description: {
          address: `66 Corusant Way, King West, Toronto`,
          price: `$799,999 - Maintenance Fee $420`
        }
      },
      {
        id:  `favorites-2`,
        imageUrl: `assets/imgs/estate/4.jpg`,
        description: {
          address: `66 Corusant Way, King West, Toronto`,
          price: `$799,999 - Maintenance Fee $420`
        }
      },
      {
        id:  `favorites-3`,
        imageUrl: `assets/imgs/estate/2.jpg`,
        description: {
          address: `66 Corusant Way, King West, Toronto`,
          price: `$799,999 - Maintenance Fee $420`
        }
      },
      {
        id:  `favorites-4`,
        imageUrl: `assets/imgs/estate/1.jpg`,
        description: {
          address: `66 Corusant Way, King West, Toronto`,
          price: `$799,999 - Maintenance Fee $420`
        }
      },
    ]
  };

  constructor( public modalController : ModalController ) { }

  ngOnInit() { }

  animateCard( id ) {
    let animation: string = `slideUp`
    $( '#' + id ).addClass('magictime');
    $( '#' + id ).addClass(animation);
    setTimeout(() => { $( '#' + id ).removeClass(animation) }, 750)
  }

  async showPropertyDetails( propertyDetails ) {
    this.animateCard( propertyDetails.id )
    const modal = await this.modalController.create( { component: PropertyDetailsPage, componentProps: { details : propertyDetails } } )
    setTimeout( () => { return modal.present() }, 750 )
  }

  async showMore( type ) {
    ( type == 'like' ) ?
      this.content = { component: RecentLikesPage, componentProps: this.properties.likes } : 
      this.content = { component: FavoritesPage, componentProps: this.properties.favorites }

    const modal = await this.modalController.create( this.content );
    return modal.present();
  }
}
