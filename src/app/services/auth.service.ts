import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router,RouterModule } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import {switchMap } from 'rxjs/operators';
import { NgModule } from '@angular/core';

@Injectable()
export class AuthService
{
  user$: Observable<User>;
  user: User;




  constructor
  (
    private afauth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private loadingCntrl: LoadingController,
    private toastr: ToastController
  )
  {
    this.user$ = this.afauth.authState.pipe(
      switchMap(user=>
        {
          if(user)
          {
            return this.afs.doc(`users/$(user.uid)`).valueChanges();
          } else {
            return of(null);
          }
        })
    );
  }

  async login(email, pass)
  {
    const loading = await this.loadingCntrl.create({
      message: 'Authenticating..',
      spinner: 'crescent',
      showBackdrop: true
    });

    loading.present();

    this.afauth.signInWithEmailAndPassword(email,pass).then((data)=>{
      if(!data.user.emailVerified)
      {
        loading.dismiss();
        this.toast('Please verified your email', 'Danger');
        this.logout();
      } else {
        loading.dismiss();
        this.router.navigate(['/tabs/home2']);
      }
    })
  }

  logout()
  {
    this.afauth.signOut().then(()=> {
      this.router.navigate(['/tabs/login']);
    });
  }

  async toast(message, status)
  {
    const toast = await this.toastr.create({
      message:message,
      position:'top',
      color: status,
      duration: 2000
    });

    toast.present();
  }
}
