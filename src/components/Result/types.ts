import type { ConvertCurrencyResponse } from "@/services/currency/types";
import type { ConverterForm } from "@/components/Converter/types";

export interface ResultProps extends ConverterForm {
  result: number;
  info?: ConvertCurrencyResponse["info"];
}
