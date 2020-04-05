import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthGuardService } from '../services/auth-guard.service';
import { ListTodoListService } from '../services/list-todo-list.service';
import { AuthenticateService } from '../services/authentication.service';
import { ListTodo } from '../model/ListTodo';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-list-todo-list',
  templateUrl: './list-todo-list.page.html',
  styleUrls: ['./list-todo-list.page.scss'],
})
export class ListTodoListPage implements OnInit {

    public listTodos$: Observable<Array<ListTodo>>;
    userEmail: string;
    canRead: boolean;
    canWrite: boolean;

  constructor(
    public listService: ListTodoListService,
    public guardService: AuthGuardService,
    public authService: AuthenticateService){
      this.userEmail = this.authService.userDetails().email;
    }

  ngOnInit(): void {
    this.listTodos$ = this.listService.get();
  }

  includesEmailRead(list: ListTodo) : boolean {
    let bool = false;
    list.userCanRead.forEach(tmp =>{
      if(tmp.includes(this.userEmail)){
        bool = true;
      }
    });
    return bool;
  }

  includesEmailWrite(list: ListTodo) : boolean {
    let bool = false;
    list.userCanWrite.forEach(tmp =>{
      if(tmp.includes(this.userEmail)){
        bool = true;
      }
    });
    return bool;
  }

  delete(todoList: ListTodo){
    this.listService.delete(todoList);
  }

  logout(){
    this.authService.logoutUser();
  }
}
