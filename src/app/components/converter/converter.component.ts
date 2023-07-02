import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../../services';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss'],
})
export class Converter implements OnInit {
  inputValue = 1;

  outputValue = 1;

  firstCurrency = 'UAH';

  secondCurrency = 'USD';

  isLoading = true;

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
    this.outputValue = this.currencyService.convertCurrency(
      this.inputValue,
      this.firstCurrency,
      this.secondCurrency,
    );
  }

  convertFromSecondCurrency() {
    this.inputValue = this.currencyService.convertCurrency(
      this.outputValue,
      this.secondCurrency,
      this.firstCurrency,
    );
  }
}
