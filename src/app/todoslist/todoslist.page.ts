import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo';
import { TodoslistService } from '../services/todoslist.service';
import { Observable } from 'rxjs';
import { AuthGuardService } from '../services/auth-guard.service';

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
    private authService: AuthGuardService) {}

  ngOnInit(): void {
    this.todos$ = this.listService.get();
    if(this.authService.userDetails()){
     this.userEmail = this.authService.userDetails().email;
   }
  }

  delete(todo: Todo){
    this.listService.delete(todo);
  }

}
