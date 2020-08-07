import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocalDetailPageRoutingModule } from './local-detail-routing.module';

import { LocalDetailPage } from './local-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocalDetailPageRoutingModule
  ],
  declarations: [LocalDetailPage]
})
export class LocalDetailPageModule {}
