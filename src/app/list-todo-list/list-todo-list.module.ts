import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListTodoListPageRoutingModule } from './list-todo-list-routing.module';

import { ListTodoListPage } from './list-todo-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListTodoListPageRoutingModule
  ],
  declarations: [ListTodoListPage]
})
export class ListTodoListPageModule {}
