import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: '', loadChildren: './location-tester/location-tester.module#LocationTesterPageModule' },
  { path: 'add-observ', loadChildren: './add-observ/add-observ.module#AddObservPageModule' },
  { path: 'location-tester', loadChildren: './location-tester/location-tester.module#LocationTesterPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
