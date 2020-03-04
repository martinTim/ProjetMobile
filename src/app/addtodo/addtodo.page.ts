import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoUser } from '../model/todoUser';
import { TodoslistService } from '../services/todoslist.service';
import { AuthGuardService } from '../services/auth-guard.service';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.page.html',
  styleUrls: ['./addtodo.page.scss'],
})
export class AddtodoPage implements OnInit {

  title: string;

  constructor(private listService: TodoslistService,
    private guardService: AuthGuardService,
    private router: Router) { }

  ngOnInit() {
  }

  addList(){
    let item = { title: this.title, isDone: false, user : this.guardService.userDetails().email} as TodoUser;
    this.listService.add(item);
    this.router.navigate(['']);
  }
}
