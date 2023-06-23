import { useCallback, useEffect, useState } from "react";
import { type UseExchangeHistoryProps } from "./types";
import { getTimeseries } from "@/services/timeseries";
import type { Rate, Statistic } from "@/@types";
import { prepareStatisticsData, transformRateData } from "./utils";
import subDays from "date-fns/subDays";
import { DateFormat, View } from "@/@enums";
import { formatDate } from "@/utils/date";

const useExchangeHistory = ({ base, symbol }: UseExchangeHistoryProps) => {
  const [ratesData, setRatesData] = useState<Rate[]>([]);
  const [statisticsData, setStatisticsData] = useState<Statistic[]>([]);
  const [duration, setDuration] = useState(7);
  const [view, setView] = useState(View.TABLE);

  const fetchData = useCallback(async () => {
    try {
      const newDate = new Date();
      const { data } = await getTimeseries({
        base,
        symbol,
        startDate: formatDate(
          subDays(newDate, duration + 1),
          DateFormat.DATE_WITH_DASH
        ),
        endDate: formatDate(subDays(newDate, 1), DateFormat.DATE_WITH_DASH),
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
