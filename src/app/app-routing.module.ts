import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuardService} from "./services/auth-guard.service";

const routes: Routes = [
  { path: '', redirectTo: 'list-todo-list', pathMatch: 'full' },
  {
    path: 'todoslist/:id',
    loadChildren: () => import('./todoslist/todoslist.module').then( m => m.TodoslistPageModule),
    canActivate: [AuthGuardService],
  },
  {
    path: 'addtodo/:id',
    loadChildren: () => import('./addtodo/addtodo.module').then( m => m.AddtodoPageModule),
    canActivate: [AuthGuardService],
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'list-todo-list',
    loadChildren: () => import('./list-todo-list/list-todo-list.module').then( m => m.ListTodoListPageModule),
    canActivate: [AuthGuardService],
  },
  {
    path: 'addtodolist',
    loadChildren: () => import('./addtodolist/addtodolist.module').then( m => m.AddtodolistPageModule),
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
