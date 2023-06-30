import { Component, OnInit } from '@angular/core';
import {CurrencyService} from "../../services";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  usdToUah: number = 1;
  eurToUah: number = 1

  constructor(public currencyService: CurrencyService) {}

  ngOnInit() {
    this.updateExchangeRates();
  }

  updateExchangeRates() {
    this.currencyService.fetchExchangeRates().subscribe(() => {
      this.usdToUah = this.currencyService.getExchangeRate('USD');
      this.eurToUah = this.currencyService.getExchangeRate('EUR');
    });
  }
}
