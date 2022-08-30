import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MilesTrackingPage } from './miles-tracking.page';

const routes: Routes = [
  {
    path: '',
    component: MilesTrackingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MilesTrackingPageRoutingModule {}
