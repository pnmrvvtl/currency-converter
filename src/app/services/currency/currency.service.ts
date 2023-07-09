// libs
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// types
import { Currency, CurrencyResponse, ExchangeRate, ExchangeRatesResponse } from '../../interfaces';
// data
import currencies from '../../../assets/currencies';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private exchangeRates: ExchangeRate[] = [];

  private API_KEY = environment.currencyApiKey;

  private _currencies: [string, Currency][] = [];

  private apiUrl = 'https://api.currencyapi.com/v3/';

  private _baseCurrency = 'UAH';

  private _convertCurrencies: string[] = ['USD', 'EUR', 'PLN', 'GBP'];

  get baseCurrency(): string {
    return this._baseCurrency;
  }

  set baseCurrency(value: string) {
    this._baseCurrency = value;
  }

  get convertCurrencies(): string[] {
    return this._convertCurrencies;
  }

  set convertCurrencies(value: string[]) {
    this._convertCurrencies = value;
  }

  get currencies(): [string, Currency][] {
    return this._currencies;
  }

  constructor(private http: HttpClient) {}

  fetchExchangeRates(): Observable<void> {
    return this.http
      .get<ExchangeRatesResponse>(
        `${this.apiUrl}latest?apikey=${this.API_KEY}` +
          `&currencies=${currencies.map((el) => el.name).join('%2C')}&base_currency=UAH`,
      )
      .pipe(
        map((data) => {
          this.exchangeRates = Object.values(data.data);
        }),
      );
  }

  fetchCurrencies(): Observable<void> {
    const headers = new HttpHeaders().set('apikey', this.API_KEY);

    return this.http.get<CurrencyResponse>(`${this.apiUrl}currencies`, { headers }).pipe(
      map((data) => {
        this._currencies = Object.entries(data.data);
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
