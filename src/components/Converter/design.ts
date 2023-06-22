import { COLORS } from "@/constants/colors";
import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const StyledSwitchButton = styled(Button)`
  background-color: ${COLORS.WHITE};
  color: ${COLORS.PRIMARY};
  max-width: 2.125rem;
  min-width: unset;
`;

export const StyledSubmitButton = styled(Button)`
  min-width: 5.5rem;
`;

export const Form = styled.form`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 1.25rem;
`;

export const FieldWrapper = styled.span<{ width?: string }>`
  width: ${({ width }) => width || "100%"};
`;
