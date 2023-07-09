import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class Registration {
  email = '';

  password = '';

  repeatPassword = '';

  isLoading = false;

  matcher: ErrorStateMatcher = {
    isErrorState: (
      control: FormControl | null,
      form: FormGroupDirective | NgForm | null,
    ): boolean => {
      const invalidCtrl = Boolean(control && control.invalid && (control.dirty || control.touched));
      const mismatch = Boolean(
        control && control.parent && control.value !== control.parent.get('password')?.value,
      );
      return invalidCtrl || mismatch;
    },
  };

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  register() {
    this.isLoading = true;
    this.afAuth
      .createUserWithEmailAndPassword(this.email, this.password)
      .then(() => {
        console.log('User registered successfully');
        this.isLoading = false;
        this.router.navigate(['/']);
      })
      .catch((error: Error) => {
        console.error('Error registering:', error);
        this.isLoading = false;
      })
      .finally(() => {
        this.isLoading = false;
      });
  }
}
