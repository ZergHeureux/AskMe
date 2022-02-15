import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AskmePage } from './askme.page';

const routes: Routes = [
  {
    path: '',
    component: AskmePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AskmePageRoutingModule {}
