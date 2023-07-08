import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class Authentication {
  email = '';

  password = '';

  constructor(private afAuth: AngularFireAuth) {}

  login() {
    this.afAuth
      .signInWithEmailAndPassword(this.email, this.password)
      .then(() => {
        console.log('User logged in successfully');
        // You can perform additional actions here after successful login
      })
      .catch((error: Error) => {
        console.error('Error logging in:', error);
        // Handle error cases here
      });
  }
}
