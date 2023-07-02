// libs
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// types
import { ExchangeRate, ExchangeRatesResponse } from '../../interfaces';
// data
import currencies from '../../../assets/currencies';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private exchangeRates: ExchangeRate[] = [];

  constructor(private http: HttpClient) {}

  fetchExchangeRates(): Observable<void> {
    /* I'm going to hide my safe info like this API_KEY in .env for example,
    but now I don't want to waste your time for creating your own API_KEY
    or getting it from me, so I'll just leave it like this
    nevertheless it's free for me. But in real project I'm going to hide sensitive
    data like that. */
    const API_KEY = '';
    // const API_KEY = '7dGVZ4lxFgsd56Ct9pqdMAeA0CMluLYlFHJ76y2n';
    return this.http
      .get<ExchangeRatesResponse>(
        `https://api.currencyapi.com/v3/latest?apikey=${API_KEY}` +
          `&currencies=${currencies.map((el) => el.name).join('%2C')}&base_currency=UAH`,
      )
      .pipe(
        map((data) => {
          this.exchangeRates = Object.values(data.data);
        }),
      );
  }

  convertCurrency(amount: number, fromCurrency: string, toCurrency: string): number {
    const fromRate = this.getExchangeRate(fromCurrency);
    const toRate = this.getExchangeRate(toCurrency);

    const sumValue = amount / fromRate;
    return sumValue * toRate;
  }

  getExchangeRate(currency: string): number {
    const exchangeRate = this.exchangeRates.find((rate) => rate.code === currency);
    return exchangeRate ? exchangeRate.value : 1;
  }
}
