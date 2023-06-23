import { COLORS } from "@/constants/colors";
import styled from "@emotion/styled";
import { IconButton } from "@mui/material";

export const StyledIconButton = styled(IconButton)`
  display: flex;
  gap: 0.25rem;
  border-radius: 0.6rem;
  font-size: 1rem;
  font-weight: 500;
`;

export const StyledActions = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2.5rem;
  width: 11rem;
`;
