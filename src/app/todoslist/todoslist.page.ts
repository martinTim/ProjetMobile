import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo';
import { TodoslistService } from '../services/todoslist.service';
import { Observable } from 'rxjs';
import { AuthGuardService } from '../services/auth-guard.service';
import { AuthenticateService } from '../services/authentication.service';


@Component({
  selector: 'app-todoslist',
  templateUrl: './todoslist.page.html',
  styleUrls: ['./todoslist.page.scss'],
})
export class TodoslistPage implements OnInit {

  private todos$: Observable<Array<Todo>>;
  userEmail: string;

  constructor(
    private listService: TodoslistService,
    private guardService: AuthGuardService,
    private authService: AuthenticateService){}

  ngOnInit(): void {
    this.todos$ = this.listService.get();
  }

  delete(todo: Todo){
    this.listService.delete(todo);
  }

  logout(){
    this.authService.logoutUser();
  }

}
