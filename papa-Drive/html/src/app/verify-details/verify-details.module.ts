import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifyDetailsPageRoutingModule } from './verify-details-routing.module';

import { VerifyDetailsPage } from './verify-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifyDetailsPageRoutingModule
  ],
  declarations: [VerifyDetailsPage]
})
export class VerifyDetailsPageModule {}
