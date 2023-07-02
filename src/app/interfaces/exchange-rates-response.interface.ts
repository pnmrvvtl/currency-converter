// types
import ExchangeRate from './exchange-rate.interface';

export default interface ExchangeRatesResponse {
  meta: {
    last_updated_at: string;
  };
  data: {
    [key: string]: ExchangeRate;
  };
}
