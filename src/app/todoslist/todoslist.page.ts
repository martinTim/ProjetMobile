import { ListTodo } from './../model/ListTodo';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo';
import { TodoslistService } from '../services/todoslist.service';
import { Observable } from 'rxjs';
import { ListTodoListService } from '../services/list-todo-list.service';
import { AuthGuardService } from '../services/auth-guard.service';
import { AuthenticateService } from '../services/authentication.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-todoslist',
  templateUrl: './todoslist.page.html',
  styleUrls: ['./todoslist.page.scss'],
})
export class TodoslistPage implements OnInit {

  private todos: Array<Todo>;
  userEmail: string;
  private idTodolist: string;
  todoList: Observable<ListTodo>;
  canRead: boolean;
  canWrite: boolean;
  constructor(

    private router: Router,
    private listTodoListService: ListTodoListService,
    private listService: TodoslistService,
    private guardService: AuthGuardService,
    private authService: AuthenticateService,
    private activatedRoute: ActivatedRoute) {
      this.userEmail = this.authService.userDetails().email;
      this.idTodolist = this.router.url.substring(11);
    }

  ngOnInit(): void {
    this.todos = this.listService.get(this.idTodolist);
    this.todoList = this.listTodoListService.getTodoList(this.idTodolist);
    const subscription1 = this.todoList.subscribe(todolist => this.canRead = todolist.userCanRead.includes(this.userEmail));
    const subscription2 = this.todoList.subscribe(todolist => this.canWrite = todolist.userCanWrite.includes(this.userEmail));
  }

  delete(todo: Todo){
    location.reload();
    this.listService.delete(todo);
  }

  logout(){
    this.authService.logoutUser();
  }

  retourList(){
    this.router.navigate(['']);
  }

  partager(){
    this.router.navigate(['partage-liste/'+this.idTodolist]);
  }

}
