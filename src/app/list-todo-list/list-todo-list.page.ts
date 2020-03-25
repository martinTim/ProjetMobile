import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthGuardService } from '../services/auth-guard.service';
import { ListTodoListService } from '../services/list-todo-list.service';
import { AuthenticateService } from '../services/authentication.service';
import { ListTodo } from '../model/ListTodo';

@Component({
  selector: 'app-list-todo-list',
  templateUrl: './list-todo-list.page.html',
  styleUrls: ['./list-todo-list.page.scss'],
})
export class ListTodoListPage implements OnInit {

    private listTodos$: Observable<Array<ListTodo>>;
    userEmail: string;

  constructor(
    private listService: ListTodoListService,
    private guardService: AuthGuardService,
    private authService: AuthenticateService){}

  ngOnInit(): void {
    this.listTodos$ = this.listService.get();
  }

  delete(todoList: ListTodo){
    this.listService.delete(todoList);
  }

  logout(){
    this.authService.logoutUser();
  }
}
