import { Currency } from "@/@enums/currencies";
import type { ConvertCurrencyResponse } from "@/services/currency/types";

export interface ConverterForm {
  amount: string;
  from: Currency;
  to: Currency;
}

export interface ConvertedData extends ConvertCurrencyResponse {}
