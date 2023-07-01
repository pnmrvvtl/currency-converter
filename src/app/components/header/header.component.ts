import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../../services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class Header implements OnInit {
  usdToUah = 1;

  eurToUah = 1;

  plnToUah = 1;

  gbpToUah = 1;

  constructor(public currencyService: CurrencyService) {}

  ngOnInit() {
    this.updateExchangeRates();
  }

  updateExchangeRates() {
    this.currencyService.fetchExchangeRates().subscribe(() => {
      this.usdToUah = this.currencyService.getExchangeRate('USD');
      this.eurToUah = this.currencyService.getExchangeRate('EUR');
      this.plnToUah = this.currencyService.getExchangeRate('PLN');
      this.gbpToUah = this.currencyService.getExchangeRate('GBP');
    });
  }
}
