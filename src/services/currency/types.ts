import { Currency } from "@/@enums/currencies";

export interface ConvertCurrencyRequest {
  from: Currency;
  to: Currency;
  amount: string;
}

export interface ConvertCurrencyResponse {
  info: { rate: number };
  result: number;
  success: boolean;
}
