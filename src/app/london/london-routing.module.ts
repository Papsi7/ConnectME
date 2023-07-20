import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LondonPage } from './london.page';

const routes: Routes = [
  {
    path: '',
    component: LondonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LondonPageRoutingModule {}
