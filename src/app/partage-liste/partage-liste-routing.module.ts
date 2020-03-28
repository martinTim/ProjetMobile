import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartageListePage } from './partage-liste.page';

const routes: Routes = [
  {
    path: '',
    component: PartageListePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PartageListePageRoutingModule {}
