import type { Statistic, TableColumn } from "@/@types";
import type { Rate } from "@/@types";
import format from "date-fns/format";

export const RATES_COLUMNS: TableColumn<Rate>[] = [
  {
    name: "Date",
    accessor: "date",
    renderCell: ({ date }) => format(new Date(date), "dd/MM/yyyy").toString(),
  },
  {
    name: "Exchange rate",
    accessor: "value",
  },
];

export const STATISTICS_COLUMNS: TableColumn<Statistic>[] = [
  {
    name: "Statistics",
    accessor: "title",
  },
  {
    accessor: "value",
  },
];
