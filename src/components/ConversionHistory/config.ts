import type { Conversion, TableColumn } from "@/@types";
import format from "date-fns/format";

export const CONVERSIONS_COLUMNS: TableColumn<Conversion>[] = [
  {
    name: "Date",
    accessor: "date",
    renderCell: ({ date }) =>
      format(new Date(date), "dd/MM/yyyy @ kk:mm").toString(),
  },
  {
    name: "Event",
    renderCell: ({ from, to, amount }) =>
      `Converted an amount of ${amount} from ${from} to ${to}`,
  },
];
