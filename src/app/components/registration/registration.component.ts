import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class Registration {
  email = '';

  password = '';

  constructor(private afAuth: AngularFireAuth) {}

  register() {
    this.afAuth
      .createUserWithEmailAndPassword(this.email, this.password)
      .then(() => {
        console.log('User registered successfully');
        // You can perform additional actions here after successful registration
      })
      .catch((error: Error) => {
        console.error('Error registering:', error);
        // Handle error cases here
      });
  }
}
