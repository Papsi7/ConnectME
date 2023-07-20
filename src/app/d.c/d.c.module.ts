import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DCPageRoutingModule } from './d.c-routing.module';

import { DCPage } from './d.c.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DCPageRoutingModule
  ],
  declarations: [DCPage]
})
export class DCPageModule {}
