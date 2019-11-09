import { Component, OnInit } from '@angular/core';
import { PopoverController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {

  public title : string
  public subtitle : string

  constructor( public popoverController : PopoverController, public navParams : NavParams ) { }

  ngOnInit() {
    this.title = this.navParams.data.title
    this.subtitle = this.navParams.data.subtitle
  }

  deleteCard( value : boolean ) {
    
    this.popoverController.dismiss({
      componentProps : {
        confirmation : value
      }
    });
  
  }

}
