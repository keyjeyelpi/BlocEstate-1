import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, PopoverController } from '@ionic/angular';
import { PropertyDetailsPage } from '../../property-details/property-details.page';
import { StepOnePage } from '../step-one/step-one.page';
import { PopoverComponent } from '../popover/popover.component';
import * as $ from 'jquery';

@Component({
  selector: 'app-my-contracts',
  templateUrl: './my-contracts.page.html',
  styleUrls: ['./my-contracts.page.scss'],
})
export class MyContractsPage implements OnInit {

  constructor(public modalController: ModalController, public popoverController: PopoverController, public router: Router) { }

  public userType: any = 'buyer'
  public segmentType: any = 'pending'
  public tabNumber: number
  public cardRemoval: boolean = true

  public buyer: any = {
    "pending": [
      {
        "id": "1",
        "imageUrl": "assets/imgs/estate/1.jpg",
        "description": {
          "address": "66 Corusant Way, King West, Toronto",
          "price": "$799,999 - Maintenance Fee $420"
        }
      },
      {
        "id": "2",
        "imageUrl": "",
        "description": {
          "address": "84 Scollard St, Toronto",
          "price": "$799,999 - Maintenance Fee $420"
        }
      }
    ],

    "approved": [
      {
        "id": "3",
        "imageUrl": "assets/imgs/estate/2.jpg",
        "description": {
          "address": "500 Kingston Rd, Toronto",
          "price": "$799,999 - Maintenance Fee $420"
        }
      },
      {
        "id": "4",
        "imageUrl": "assets/imgs/estate/3.jpg",
        "description": {
          "address": "315 St, Germain Ave, Toronto",
          "price": "$799,999 - Maintenance Fee $420"
        }
      }
    ],

    "paid": [
      {
        "id": "5",
        "imageUrl": "assets/imgs/estate/4.jpg",
        "description": {
          "address": "234 Willow Ave, Toronto",
          "price": "$799,999 - Maintenance Fee $420"
        }
      },
      {
        "id": "6",
        "imageUrl": "assets/imgs/estate/5.jpg",
        "description": {
          "address": "26 Goodwood Park Cres, East York, Toronto",
          "price": "$799,999 - Maintenance Fee $420"
        }
      }
    ],

    "archived": []
  }

  public seller: any = {
    "pending": [
      {
        "id": "7",
        "imageUrl": "",
        "description": {
          "address": "48 St Clair Ave W, East York, Toronto",
          "price": "$799,999 - Maintenance Fee $420"
        }
      },
      {
        "id": "8",
        "imageUrl": "assets/imgs/estate/6.jpg",
        "description": {
          "address": "1974 Queen St, East York, Toronto",
          "price": "$799,999 - Maintenance Fee $420"
        }
      }
    ],

    "approved": [
      {
        "id": "9",
        "imageUrl": "assets/imgs/estate/7.jpg",
        "description": {
          "address": "42 Balsam Ave, Toronto",
          "price": "$799,999 - Maintenance Fee $420"
        }
      },
      {
        "id": "10",
        "imageUrl": "assets/imgs/estate/8.jpg",
        "description": {
          "address": "258 Waverley Rd, Toronto",
          "price": "$799,999 - Maintenance Fee $420"
        }
      }
    ],

    "paid": [
      {
        "id": "11",
        "imageUrl": "assets/imgs/estate/9.jpg",
        "description": {
          "address": "101 Hillingdon Ave, Toronto",
          "price": "$799,999 - Maintenance Fee $420"
        }
      },
      {
        "id": "12",
        "imageUrl": "assets/imgs/estate/10.jpg",
        "description": {
          "address": "24 Hammersmith Ave, Toronto",
          "price": "$799,999 - Maintenance Fee $420"
        }
      }
    ],

    "archived": []
  }

  public selectedContracts: any;

  async showInfo(contract_information) {
    const modal = await this.modalController.create({
      component: PropertyDetailsPage,
      componentProps: {
        contract_information: contract_information
      }
    })
    return await modal.present()
  }

  async showContract(contract_information) {
    const modal = await this.modalController.create({
      component: StepOnePage,
      componentProps: {
        id: contract_information.id,
        showFab: false
      }
    })

    modal.onDidDismiss()
      .then((result) => {
        if (result.data.componentProps.confirmation == true) {
          this.removeCard(result.data.componentProps.id)
        }
      });

    return await modal.present()
  }

  ngOnInit() {
    this.showSegment()
  }

  showSegment() {
    if (this.userType == 'buyer') {
      this.selectedContracts = this.buyer[this.segmentType]
    } else {
      this.selectedContracts = this.seller[this.segmentType]
    }
  }

  changeSegment(segment) {
    if (this.segmentType != segment) {
      this.segmentType = segment
      this.showSegment()
    }
  }

  clickFunction(contractInfo) {
    if (this.segmentType == 'approved') {
      this.showContract(contractInfo)
    } else if (this.segmentType == 'pending') {
      this.showInfo(contractInfo)
    } else if (this.segmentType == 'paid') {
      this.router.navigate(['/contract/mode-of-payment'])
    }
  }

  async cardPopover(id) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      componentProps: {
        title: 'Are you sure you want to delete your pending contract?',
        subtitle: 'All contract details saved will be deleted.'
      }
    })

    popover.onDidDismiss()
      .then((result) => {
        this.cardRemoval = result.data.componentProps.confirmation

        if (this.cardRemoval == true) {
          this.removeCard(id)
        }
      });

    return await popover.present()
  }

  removeCard( id ) {
    var user = null
    if (this.userType == 'buyer') {
      user = this.buyer
    } else {
      user = this.seller
    }

    if (this.segmentType == 'approved') {

      user.paid.push(user.approved.filter(card => (card || {}).id === id)[0])
      user.approved = user.approved.filter(card => (card || {}).id !== id)

    } else if (this.segmentType == 'pending') {

      user.archived.push(user.pending.filter(card => (card || {}).id === id)[0])
      user.pending = user.pending.filter(card => (card || {}).id !== id)

    }

    this.showSegment()
    console.log( this.buyer.archived, this.buyer.pending )
    console.log( this.seller.archived, this.seller.pending )
  }

  toggleType(type) {
    if (this.userType != type) {
      this.userType = type

      if (type == 'buyer') {
        this.tabNumber = 1
        $('ion-tab-button[tabIndex="2"]').removeClass('tab-selected')
      } else {
        this.tabNumber = 2
        $('ion-tab-button[tabIndex="1"]').removeClass('tab-selected')
      }

      $('ion-tab-button[tabIndex="' + this.tabNumber + '"]').addClass('tab-selected')

      this.showSegment()
    }
  }

}
