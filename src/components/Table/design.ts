import { COLORS } from "@/constants/colors";
import styled from "@emotion/styled";
import {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Table,
} from "@mui/material";

export const StyledTable = styled(Table)``;

export const StyledTableRow = styled(TableRow)`
  color: ${COLORS.TEXT_HEADER};
`;

export const StyledTableBody = styled(TableBody)`
  ${StyledTableRow} {
    &:last-child td,
    &:last-child th {
      border: 0;
    }
  }
`;

export const StyledTableCell = styled(TableCell)``;

export const StyledTableHead = styled(TableHead)`
  ${StyledTableCell} {
    color: ${COLORS.TEXT_HEADER};
    font-weight: 500;
  }
`;