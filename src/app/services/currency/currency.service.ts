import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ExchangeRate, ExchangeRatesResponse } from '../../interfaces';

@Injectable({
  providedIn: 'root',
})
export default class CurrencyService {
  private exchangeRates: ExchangeRate[] = [];

  constructor(private http: HttpClient) {}

  fetchExchangeRates(): Observable<void> {
    const API_KEY = '7dGVZ4lxFgsd56Ct9pqdMAeA0CMluLYlFHJ76y2n';
    return this.http
      .get<ExchangeRatesResponse>(
        `https://api.currencyapi.com/v3/latest?apikey=${API_KEY}` +
          `&currencies=EUR%2CUSD%2CCAD%2CPLN%2CGBP&base_currency=UAH`,
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
