import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LondonPageRoutingModule } from './london-routing.module';

import { LondonPage } from './london.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LondonPageRoutingModule
  ],
  declarations: [LondonPage]
})
export class LondonPageModule {}
