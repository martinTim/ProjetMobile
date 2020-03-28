import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListTodoListService } from '../services/list-todo-list.service';
import { AuthGuardService } from '../services/auth-guard.service';
import { ListTodo } from '../model/ListTodo';


@Component({
  selector: 'app-addtodolist',
  templateUrl: './addtodolist.page.html',
  styleUrls: ['./addtodolist.page.scss'],
})
export class AddtodolistPage implements OnInit {
  title: string;
  constructor(private listTodolistService: ListTodoListService,
    private guardService: AuthGuardService,
    private router: Router) { }

  ngOnInit() {
  }

  addList(){
    var userCanRead = new Array<String>();
    var userCanWrite = new Array<string>();
    let item = { title: this.title, admin : this.guardService.userDetails().email, userCanRead: userCanRead, userCanWrite: userCanWrite, todos: null} as ListTodo;
    this.listTodolistService.add(item);
    this.router.navigate(['']);
  }

}
