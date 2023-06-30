import { Component, OnInit } from '@angular/core';
import {CurrencyService} from "../../services";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  inputValue: number = 1
  outputValue: number = 1;
  firstCurrency: string = 'UAH';
  secondCurrency: string = 'USD';

  constructor(public currencyService: CurrencyService) {}

  ngOnInit() {
    this.currencyService.fetchExchangeRates().subscribe(() => {
      this.convertFromFirstCurrency();
    });
  }

  convertFromFirstCurrency() {
    this.outputValue = this.currencyService.convertCurrency(
      this.inputValue,
      this.firstCurrency,
      this.secondCurrency
    );
  }

  convertFromSecondCurrency() {
    this.outputValue = this.currencyService.convertCurrency(
      this.inputValue,
      this.secondCurrency,
      this.firstCurrency
    );
  }
}
