import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CurrencyService } from '../../services';
import { Currency } from '../../interfaces';

@Component({
  selector: 'app-currency-picker',
  templateUrl: './currency-picker.component.html',
  styleUrls: ['./currency-picker.component.scss'],
})
export class CurrencyPicker implements OnInit {
  baseCurrencyControl = new FormControl();

  conversionCurrenciesControl = new FormControl();

  baseCurrencyOptions: Currency[] = [];

  conversionCurrencyOptions: Currency[] = [];

  constructor(private currencyService: CurrencyService) {}

  ngOnInit() {
    this.currencyService.fetchCurrencies().subscribe(() => {
      this.baseCurrencyOptions = this.currencyService.currencies.map(([_, currency]) => currency);
      this.conversionCurrencyOptions = this.currencyService.currencies.map(
        ([_, currency]) => currency,
      );

      this.baseCurrencyControl.setValue(this.currencyService.baseCurrency);
      this.conversionCurrenciesControl.setValue(this.currencyService.convertCurrencies);
    });
  }

  saveCurrencies() {
    const baseCurrency = this.baseCurrencyControl.value;
    const conversionCurrencies = this.conversionCurrenciesControl.value;

    this.currencyService.baseCurrency = baseCurrency;
    this.currencyService.convertCurrencies = conversionCurrencies;
  }
}
