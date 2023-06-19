import { API } from "@/@enums/api";
import { instance } from "..";
import type { ConvertCurrencyRequest, ConvertCurrencyResponse } from "./types";

export const convertCurrency = (params: ConvertCurrencyRequest) => {
  return instance.get<ConvertCurrencyResponse>(API.CONVERT, {
    params,
  });
};
