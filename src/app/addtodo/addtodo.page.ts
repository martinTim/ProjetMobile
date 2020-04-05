import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo';
import { TodoslistService } from '../services/todoslist.service';
import { AuthGuardService } from '../services/auth-guard.service';
import { AuthenticateService } from '../services/authentication.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.page.html',
  styleUrls: ['./addtodo.page.scss'],
})
export class AddtodoPage implements OnInit {

  title: string;
  idListe: string;

  constructor(
    private listService: TodoslistService,
    private guardService: AuthGuardService,
    public authService: AuthenticateService,
    private router: Router) {
    this.idListe =  this.router.url.substring(9);}

  ngOnInit() {
  }

  addList(){
    let item = { title: this.title, isDone: false, idListe:this.idListe} as Todo;
    this.listService.add(item);
    this.router.navigate(['todoslist/'+this.idListe]);
  }

  retourList(){
    this.router.navigate(['']);
  }

  logout(){
    this.authService.logoutUser();
  }
}
