import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListTodoListPage } from './list-todo-list.page';

const routes: Routes = [
  {
    path: '',
    component: ListTodoListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListTodoListPageRoutingModule {}
