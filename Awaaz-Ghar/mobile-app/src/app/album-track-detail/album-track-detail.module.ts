import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlbumTrackDetailPageRoutingModule } from './album-track-detail-routing.module';

import { AlbumTrackDetailPage } from './album-track-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlbumTrackDetailPageRoutingModule
  ],
  declarations: [AlbumTrackDetailPage]
})
export class AlbumTrackDetailPageModule {}
