import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MilesTrackingPageRoutingModule } from './miles-tracking-routing.module';

import { MilesTrackingPage } from './miles-tracking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MilesTrackingPageRoutingModule
  ],
  declarations: [MilesTrackingPage]
})
export class MilesTrackingPageModule {
 
}
