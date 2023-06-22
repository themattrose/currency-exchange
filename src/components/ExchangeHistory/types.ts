import { Currency } from "@/@enums/currencies";

export interface ExchangeHistoryProps {
  base: Currency;
  symbol: Currency;
}

export interface UseExchangeHistoryProps extends ExchangeHistoryProps {}
