import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HongkongPageRoutingModule } from './hongkong-routing.module';

import { HongkongPage } from './hongkong.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HongkongPageRoutingModule
  ],
  declarations: [HongkongPage]
})
export class HongkongPageModule {}
