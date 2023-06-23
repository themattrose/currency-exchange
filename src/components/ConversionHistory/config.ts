import { DateFormat } from "@/@enums";
import type { Conversion, TableColumn } from "@/@types";
import { formatDate } from "@/utils/date";

export const CONVERSIONS_COLUMNS: TableColumn<Conversion>[] = [
  {
    name: "Date",
    accessor: "date",
    renderCell: ({ date }) => formatDate(date, DateFormat.DATE_AND_TIME),
  },
  {
    name: "Event",
    renderCell: ({ from, to, amount }) =>
      `Converted an amount of ${amount} from ${from} to ${to}`,
  },
];
