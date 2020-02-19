import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import * as firebase from 'firebase/app';
import {Router, Routes, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private route: ActivatedRoute) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    return new Promise((resolve,reject) =>{
      firebase.auth().onAuthStateChanged((user: firebase.User) =>{
        if(user){
          if(this.route.url){
            resolve(true);
          }else{
            resolve(false);
          }
        }else{
          console.log('User is not logged in');
          this.router.navigate(['/login']);
          resolve(false);
        }
      });
    });
  }

  userDetails(){
    return firebase.auth().currentUser;
  }
}
