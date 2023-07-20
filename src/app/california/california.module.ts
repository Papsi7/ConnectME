import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaliforniaPageRoutingModule } from './california-routing.module';

import { CaliforniaPage } from './california.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaliforniaPageRoutingModule
  ],
  declarations: [CaliforniaPage]
})
export class CaliforniaPageModule {}
