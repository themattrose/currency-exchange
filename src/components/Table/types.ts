import type { TableColumn } from "@/@types";

export interface TableProps<T extends object> {
  columns: TableColumn<T>[];
  rows: T[];
}
