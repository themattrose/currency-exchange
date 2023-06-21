import type { ReactNode } from "react";

export interface TableColumn<T> {
  name?: string;
  accessor: keyof T;
  renderCell?: (data: T) => ReactNode;
}
