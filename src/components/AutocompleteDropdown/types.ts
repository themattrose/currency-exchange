import { Currency } from "@/@enums/currencies";
import type { Option } from "@/@types";

export interface AutocompleteDropdownProps<T extends Currency | number> {
  label: string;
  value?: Option<T>;
  options: Option<T>[];
  onChange: (value: Option<T>["value"]) => void;
}
