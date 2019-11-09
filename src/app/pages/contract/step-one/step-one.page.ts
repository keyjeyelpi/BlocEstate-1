import { Component, OnInit } from '@angular/core';
import { ModalController, PopoverController, NavParams } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';
import { StepTwoPage } from '../step-two/step-two.page';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.page.html',
  styleUrls: ['./step-one.page.scss'],
})
export class StepOnePage implements OnInit {

  public return: any;

  constructor( public modalController : ModalController , public popoverController : PopoverController , public navParams : NavParams ) { }

  ngOnInit() {
  }

  async cardPopover( ) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      componentProps: {
        title: 'Are you sure you want to Proceed?',
        subtitle: 'There is no going back until the contract has been finished.'
      }
    })

    popover.onDidDismiss()
    .then(( result ) => {
      this.return = result.data.componentProps.confirmation

      if( this.return == true ) {
        this.nextStep();
      }
    });

    return await popover.present()
  }

  async closeModal( confirmation ) {
    if( confirmation === true ) {
      this.modalController.dismiss({
        componentProps: {
          id : this.navParams.data.id,
          confirmation : true
        }
      });  
    } else {
      this.modalController.dismiss({
        componentProps: {
          id : this.navParams.data.id,
          confirmation : false
        }
      });  
    }
  }

  async nextStep() {
    this.closeModal( true );
    const modal = await this.modalController.create( {
      componentProps: {
        id : this.navParams.data.id
      },
      component: StepTwoPage
    } );
    return modal.present();
  }
}
