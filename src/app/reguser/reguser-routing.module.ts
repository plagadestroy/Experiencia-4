import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReguserPage } from './reguser.page';

const routes: Routes = [
  {
    path: '',
    component: ReguserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReguserPageRoutingModule {}
