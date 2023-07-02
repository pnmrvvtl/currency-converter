// libs
import { Component, OnInit } from '@angular/core';
// services
import { CurrencyService } from '../../services';
// data
import currencies from '../../../assets/currencies';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss'],
})
export class Converter implements OnInit {
  inputValue = 100;

  outputValue = 1;

  firstCurrency = 'USD';

  secondCurrency = 'UAH';

  isLoading = true;

  currencies = [...currencies, { name: 'UAH', description: 'Ukrainian hryvnia' }];

  FRACTION_DIGITS = 2;

  constructor(public currencyService: CurrencyService) {}

  ngOnInit() {
    this.currencyService.fetchExchangeRates().subscribe({
      next: () => {
        this.convertFromFirstCurrency();
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
        console.log(error);
      },
    });
  }

  convertFromFirstCurrency() {
    this.outputValue = Number(
      this.currencyService
        .convertCurrency(this.inputValue, this.firstCurrency, this.secondCurrency)
        .toFixed(this.FRACTION_DIGITS),
    );
  }

  convertFromSecondCurrency() {
    this.inputValue = Number(
      this.currencyService
        .convertCurrency(this.outputValue, this.secondCurrency, this.firstCurrency)
        .toFixed(this.FRACTION_DIGITS),
    );
  }
}
