import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlbumTrackDetailPage } from './album-track-detail.page';

const routes: Routes = [
  {
    path: '',
    component: AlbumTrackDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlbumTrackDetailPageRoutingModule {}
