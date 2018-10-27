import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LocationTesterPage } from './location-tester.page';
import { LocationChooseComponent } from '../location-choose/location-choose.component';

const routes: Routes = [
  {
    path: '',
    component: LocationTesterPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LocationTesterPage, LocationChooseComponent]
})
export class LocationTesterPageModule {}
