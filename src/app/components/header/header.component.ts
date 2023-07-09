// libs
import { Component, OnInit } from '@angular/core';
// services
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { CurrencyService } from '../../services';
// data
import currencies from '../../../assets/currencies';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class Header implements OnInit {
  currencies = currencies;

  exchangeRates: { [key: string]: number } = {};

  isLoading = true;

  isAuthenticated = false;

  userEmail = '';

  constructor(public currencyService: CurrencyService, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.isAuthenticated = true;
        this.userEmail = user.email || 'User';
      } else {
        this.isAuthenticated = false;
        this.userEmail = '';
      }
    });
  }

  ngOnInit() {
    this.updateExchangeRates();
  }

  updateExchangeRates() {
    this.currencyService.fetchExchangeRates().subscribe({
      next: () => {
        this.currencies.forEach((currency) => {
          this.exchangeRates[currency.name] = this.currencyService.getExchangeRate(currency.name);
        });
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
        console.log(error);
      },
    });
  }

  logout() {
    this.afAuth
      .signOut()
      .then(() => {
        console.log('User logged out successfully');
      })
      .catch((error: Error) => {
        console.error('Error logging out:', error);
      });
  }
}
