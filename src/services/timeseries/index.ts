import { API } from "@/@enums/api";
import { instance } from "..";
import type { GetTimeseriesRequest, GetTimeseriesResponse } from "./types";

export const getTimeseries = ({
  startDate,
  endDate,
  base,
  symbol,
}: GetTimeseriesRequest) => {
  return instance.get<GetTimeseriesResponse>(API.TIMESERIES, {
    params: {
      start_date: startDate,
      end_date: endDate,
      base,
      symbols: symbol,
    },
  });
};
