import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ViewContractPage } from './view-contract.page';

const routes: Routes = [
  {
    path: '',
    component: ViewContractPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ViewContractPage],
  exports: [ViewContractPage],
  entryComponents: [ViewContractPage]
})
export class ViewContractPageModule {}