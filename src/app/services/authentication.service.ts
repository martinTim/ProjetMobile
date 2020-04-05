import { Injectable } from "@angular/core";
import * as firebase from 'firebase/app';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { Platform } from '@ionic/angular';


@Injectable()
export class AuthenticateService {

  constructor(
    private router: Router,
    private platform: Platform,
    private google:GooglePlus,
    public loadingController: LoadingController,
    private fireAuth: AngularFireAuth
  ){}

  registerUser(value){
   return new Promise<any>((resolve, reject) => {
     firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
     .then(
       res => resolve(res),
       err => reject(err))
   })
  }

  loginUser(value){
   return new Promise<any>((resolve, reject) => {
     firebase.auth().signInWithEmailAndPassword(value.email, value.password)
     .then(
       res => resolve(res),
       err => reject(err))
   })
  }

  logoutUser(){
    return new Promise((resolve, reject) => {
      if(firebase.auth().currentUser){
        firebase.auth().signOut()
        .then(() => {
          console.log("LOG Out");
          resolve();
        }).catch((error) => {
          reject();
        });
      }
    })
  }

  userDetails(){
    return firebase.auth().currentUser;
  }

  async googleSignIn() {
    let params;
    if (this.platform.is('android')) {
      params = {
        'webClientId': '97993183729-gld84vcvnhs3o814v6i9eo1q9dm8hhus.apps.googleusercontent.com',
        'offline': true
      }
    }
    else {
      params = {}
    }
    this.google.login(params)
      .then((response) => {
        const { idToken, accessToken } = response
        this.onLoginSuccess(idToken, accessToken);
      }).catch((error) => {
        console.log(error)
        alert('error:' + JSON.stringify(error))
      });
  }
  onLoginSuccess(accessToken, accessSecret) {
    const credential = accessSecret ? firebase.auth.GoogleAuthProvider
        .credential(accessToken, accessSecret) : firebase.auth.GoogleAuthProvider
            .credential(accessToken);
    this.fireAuth.auth.signInWithCredential(credential)
      .then((response) => {
        this.router.navigate([""]);
      })

  }
  onLoginError(err) {
    console.log(err);
  }
}
