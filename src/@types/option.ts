import { Currency } from "@/@enums/currencies";

export interface Option<T extends Currency | number> {
  title: string;
  value: T;
}
