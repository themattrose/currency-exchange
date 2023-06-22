import { Currency } from "@/@enums/currencies";

export interface GetTimeseriesRequest {
  startDate: string;
  endDate: string;
  base: Currency;
  symbol: Currency;
}

export type GetTimeseriesResponse = {
  success: boolean;
  rates: {
    [key in string]: {
      [key in Currency]: number;
    };
  };
};
