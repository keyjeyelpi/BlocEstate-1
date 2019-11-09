import { Component, OnInit } from '@angular/core';
import { PopoverController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.scss'],
})
export class ComingSoonComponent implements OnInit {

  constructor( public popoverController : PopoverController, public navParams : NavParams ) { }

  ngOnInit() {}

  removeComingSoon() {
    this.popoverController.dismiss();
  }

}
