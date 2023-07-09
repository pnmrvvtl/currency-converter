import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class Authentication {
  email = '';

  password = '';

  isLoading = false;

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  login() {
    this.isLoading = true;
    this.afAuth
      .signInWithEmailAndPassword(this.email, this.password)
      .then(() => {
        console.log('User logged in successfully');
        this.isLoading = false;
        this.router.navigate(['/']);
      })
      .catch((error: Error) => {
        console.error('Error logging in:', error);
        this.isLoading = false;
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  googleLogin() {
    this.isLoading = true;
    this.afAuth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(() => {
        console.log('User logged in with Google successfully');
        this.isLoading = false;
        this.router.navigate(['/']);
      })
      .catch((error: Error) => {
        console.error('Error logging in with Google:', error);
        this.isLoading = false;
      });
  }
}
