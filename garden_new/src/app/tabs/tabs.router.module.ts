import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { ActionsPage } from '../actions/actions.component';
import { ObservationsPage } from '../observations/observations.component';
import { ContactPage } from '../contact/contact.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(actions:actions)',
        pathMatch: 'full',
      },
      {
        path: 'actions',
        outlet: 'actions',
        component: ActionsPage
      },
      {
        path: 'observations',
        outlet: 'observations',
        component: ObservationsPage
      },
      {
        path: 'contact',
        outlet: 'contact',
        component: ContactPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(actions:actions)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
