import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AboutDevelopersPage } from './about-developers.page';

const routes: Routes = [
  {
    path: '',
    component: AboutDevelopersPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AboutDevelopersPage]
})
export class AboutDevelopersPageModule {}
