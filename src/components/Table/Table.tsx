import { Paper, TableContainer } from "@mui/material";
import {
  StyledTable,
  StyledTableBody,
  StyledTableCell,
  StyledTableHead,
  StyledTableRow,
} from "./design";
import type { TableProps } from "./types";

const Table = <T extends object>({ columns, rows }: TableProps<T>) => {
  return (
    <TableContainer component={Paper}>
      <StyledTable>
        <StyledTableHead>
          <StyledTableRow>
            {columns.map(({ name }) => (
              <StyledTableCell key={name}>{name}</StyledTableCell>
            ))}
          </StyledTableRow>
        </StyledTableHead>
        <StyledTableBody>
          {rows?.map((row) => (
            <StyledTableRow key={JSON.stringify(row)} sx={{}}>
              {columns.map(({ name, accessor }) => (
                <StyledTableCell key={name} component="th" scope="row">
                  {row[accessor]}
                </StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </StyledTableBody>
      </StyledTable>
    </TableContainer>
  );
};

export { Table };
