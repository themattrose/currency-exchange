import { Currency } from "@/@enums/currencies";
import type { Statistic } from "@/@types";
import type { GetTimeseriesResponse } from "@/services/timeseries/types";
import { formatNumber } from "@/utils/amount";

export const transformRateData = (
  data: GetTimeseriesResponse,
  symbol: Currency
) => {
  return Object.entries(data.rates)
    .map(([key, value]) => {
      return { date: key, value: value[symbol] };
    })
    .filter(({ value }) => value);
};

export const prepareStatisticsData = (values: number[]): Statistic[] => {
  return [
    { title: "Lowest", value: formatNumber(Math.min(...values)).toString() },
    { title: "Highest", value: formatNumber(Math.max(...values)).toString() },
    {
      title: "Average",
      value: formatNumber(values.reduce((a, b) => a + b) / values.length),
    },
  ];
};
