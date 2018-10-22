import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddObservPage } from './add-observ.page';

const routes: Routes = [
  {
    path: '',
    component: AddObservPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [AddObservPage]
})
export class AddObservPageModule {}
