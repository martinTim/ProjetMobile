import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { AuthGuardService } from '../services/auth-guard.service';
import { ListTodoListService } from '../services/list-todo-list.service';
import { ListTodo } from '../model/ListTodo';

@Component({
  selector: 'app-partage-liste',
  templateUrl: './partage-liste.page.html',
  styleUrls: ['./partage-liste.page.scss'],
})
export class PartageListePage implements OnInit {

  idListe: string;
  emailUser: string;
  liste : ListTodo;
  permission : string;
  tmp : string;

  constructor(
    private guardService: AuthGuardService,
    private router: Router,
    private listService: ListTodoListService)
  {
    this.idListe =  this.router.url.substring(15);
    this.permission = "readOnly";
  }

  ngOnInit() {
  }

  addPermission(){
    this.listService.addPermission(this.idListe,this.emailUser,this.permission === "readOnly");
    this.router.navigate(['todoslist/'+this.idListe]);
  }
  
  retourList(){
    this.router.navigate(['']);
  }
}
