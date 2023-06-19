import { Currency } from "@/@enums/currencies";

export interface ConvertCurrencyRequest {
  from: keyof typeof Currency;
  to: keyof typeof Currency;
  amount: number;
}

export interface ConvertCurrencyResponse {
  info: { rate: number };
  result: number;
  success: boolean;
}
