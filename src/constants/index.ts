import { View } from "@/@enums";
import { Currency } from "@/@enums/currencies";
import type { Option } from "@/@types";

export const CURRENCY_ITEMS: Option<Currency>[] = Object.values(Currency).map(
  (item) => ({
    title: item,
    value: item,
  })
);

export const DURATION_ITEMS: Option<number>[] = [
  {
    title: "7 days",
    value: 7,
  },
  {
    title: "14 days",
    value: 14,
  },
  {
    title: "30 days",
    value: 30,
  },
];

export const VIEW_ITEMS = [
  {
    label: "Table",
    value: View.TABLE,
  },
  {
    label: "Chart",
    value: View.CHART,
  },
];
