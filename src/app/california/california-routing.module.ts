import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaliforniaPage } from './california.page';

const routes: Routes = [
  {
    path: '',
    component: CaliforniaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaliforniaPageRoutingModule {}
