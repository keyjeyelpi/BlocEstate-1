import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-electronic-funds-transfer',
  templateUrl: './electronic-funds-transfer.page.html',
  styleUrls: ['./electronic-funds-transfer.page.scss'],
})
export class ElectronicFundsTransferPage implements OnInit {

  bank: any = {
    "code": null,
    "transit_number": null,
    "account_number": null
  }

  constructor() { }

  ngOnInit() {
  }

}
