import type { TableColumn } from "@/@types";
import type { ReactNode } from "react";

export interface TableProps<T extends object> {
  columns: TableColumn<T>[];
  rows: T[];
  actions?: (row: T, rowIndex: number) => ReactNode;
}
