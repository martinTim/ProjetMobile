import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddtodolistPage } from './addtodolist.page';

const routes: Routes = [
  {
    path: '',
    component: AddtodolistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddtodolistPageRoutingModule {}
