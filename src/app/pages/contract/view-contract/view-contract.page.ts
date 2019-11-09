import { Component, OnInit } from '@angular/core';
import { ModalController , NavParams } from '@ionic/angular';

@Component({
  selector: 'app-view-contract',
  templateUrl: './view-contract.page.html',
  styleUrls: ['./view-contract.page.scss'],
})
export class ViewContractPage implements OnInit {

  constructor(public modalController : ModalController , public navParams : NavParams) { }
  information : any
  total : any

  async close() {
    this.modalController.dismiss()
  }

  ngOnInit() {
    this.information = this.navParams.data.contract_information
    this.total = Number(this.information.cost) + Number(this.information.maintenance)
  }
}
