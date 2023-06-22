import { Currency } from "@/@enums/currencies";
import type { Statistic } from "@/@types";
import type { GetTimeseriesResponse } from "@/services/timeseries/types";

export const transformRateData = (
  data: GetTimeseriesResponse,
  symbol: Currency
) => {
  return Object.entries(data.rates)
    .map(([key, value]) => {
      return { date: key, value: value[symbol] || 0 };
    })
    .filter(({ value }) => value);
};

export const prepareStatisticsData = (values: number[]): Statistic[] => {
  return [
    { title: "Lowest", value: Math.min(...values) },
    { title: "Highest", value: Math.max(...values) },
    { title: "Average", value: values.reduce((a, b) => a + b) / values.length },
  ];
};
