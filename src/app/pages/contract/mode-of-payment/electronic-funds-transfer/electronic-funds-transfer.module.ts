import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ElectronicFundsTransferPage } from './electronic-funds-transfer.page';

const routes: Routes = [
  {
    path: '',
    component: ElectronicFundsTransferPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ElectronicFundsTransferPage]
})
export class ElectronicFundsTransferPageModule {}
