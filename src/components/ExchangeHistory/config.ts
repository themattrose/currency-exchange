import { DateFormat } from "@/@enums";
import type { Statistic, TableColumn } from "@/@types";
import type { Rate } from "@/@types";
import { formatDate } from "@/utils/date";

export const RATES_COLUMNS: TableColumn<Rate>[] = [
  {
    name: "Date",
    accessor: "date",
    renderCell: ({ date }) => formatDate(date, DateFormat.DATE),
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
