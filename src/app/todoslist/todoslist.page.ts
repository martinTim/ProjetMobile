import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo';
import { ListTodo } from '../model/ListTodo';
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
  constructor(

    private router: Router,
    private listService: TodoslistService,
    private guardService: AuthGuardService,
    private authService: AuthenticateService,
    private activatedRoute : ActivatedRoute){
        this.idTodolist = this.router.url.substring(11);
    }

  ngOnInit(): void {
     this.todos = this.listService.get(this.idTodolist);
     console.log(this.todos);
  }

  delete(todo: Todo){
    this.listService.delete(todo);
  }

  logout(){
    this.authService.logoutUser();
  }

}
