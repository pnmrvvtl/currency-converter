// libs
import { Component, OnInit } from '@angular/core';
// services
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

  constructor(public currencyService: CurrencyService) {}

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
}
