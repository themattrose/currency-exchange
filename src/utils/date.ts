import { DateFormat } from "@/@enums";
import format from "date-fns/format";

export const formatDate = (date: string | Date, dateFormat: DateFormat) => {
  if (typeof date === "string") {
    return format(new Date(date), dateFormat).toString();
  } else {
    return format(date, dateFormat).toString();
  }
};
