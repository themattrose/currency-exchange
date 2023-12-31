import { Paper, TableContainer } from "@mui/material";
import {
  StyledTable,
  StyledTableBody,
  StyledTableCell,
  StyledTableHead,
  StyledTableRow,
} from "./design";
import type { TableProps } from "./types";
import { Placeholder } from "./design";
import { v4 as uuid } from "uuid";

const Table = <T extends object>({ columns, rows, actions }: TableProps<T>) => {
  return (
    <TableContainer component={Paper}>
      <StyledTable>
        <StyledTableHead>
          <StyledTableRow>
            {columns.map(({ name }) => (
              <StyledTableCell key={uuid()}>{name}</StyledTableCell>
            ))}
            {actions && <StyledTableCell>Actions</StyledTableCell>}
          </StyledTableRow>
        </StyledTableHead>
        <StyledTableBody>
          {!!rows?.length ? (
            rows?.map((row, rowIndex) => (
              <StyledTableRow key={uuid()}>
                {columns.map(({ name, accessor, renderCell }) => (
                  <StyledTableCell key={uuid()} component="td" scope="row">
                    {renderCell
                      ? renderCell(row)
                      : accessor
                      ? row[accessor]
                      : ""}
                  </StyledTableCell>
                ))}
                {actions && (
                  <StyledTableCell component="td" scope="row">
                    <div className="actions">{actions(row, rowIndex)}</div>
                  </StyledTableCell>
                )}
              </StyledTableRow>
            ))
          ) : (
            <StyledTableRow>
              <StyledTableCell
                colSpan={actions ? ++columns.length : columns.length}
                component="td"
                scope="row"
              >
                <Placeholder>No data available</Placeholder>
              </StyledTableCell>
            </StyledTableRow>
          )}
        </StyledTableBody>
      </StyledTable>
    </TableContainer>
  );
};

export { Table };
