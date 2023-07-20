import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HongkongPage } from './hongkong.page';

const routes: Routes = [
  {
    path: '',
    component: HongkongPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HongkongPageRoutingModule {}
