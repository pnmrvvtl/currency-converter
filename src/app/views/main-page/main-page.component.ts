import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../../services';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPage implements OnInit {
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
