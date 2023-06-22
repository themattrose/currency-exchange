import { useCallback, useEffect, useState } from "react";
import { type UseExchangeHistoryProps } from "./types";
import { getTimeseries } from "@/services/timeseries";
import type { Rate, Statistic } from "@/@types";
import { prepareStatisticsData, transformRateData } from "./utils";
import format from "date-fns/format";
import subDays from "date-fns/subDays";
import { View } from "@/@enums";

const useExchangeHistory = ({ base, symbol }: UseExchangeHistoryProps) => {
  const [ratesData, setRatesData] = useState<Rate[]>([]);
  const [statisticsData, setStatisticsData] = useState<Statistic[]>([]);
  const [duration, setDuration] = useState(7);
  const [view, setView] = useState(View.TABLE);

  const fetchData = useCallback(async () => {
    try {
      const { data } = await getTimeseries({
        base,
        symbol,
        startDate: format(subDays(new Date(), duration + 1), "yyyy-MM-dd"),
        endDate: format(subDays(new Date(), 1), "yyyy-MM-dd"),
      });

      const rates = transformRateData(data, symbol);
      setRatesData(rates.reverse());
      setStatisticsData(prepareStatisticsData(rates.map(({ value }) => value)));
    } catch (err) {
      console.error(err);
    }
  }, [base, duration, symbol]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { ratesData, statisticsData, duration, setDuration, view, setView };
};

export { useExchangeHistory };
