import styled from "@emotion/styled";
import { RadioGroup } from "@mui/material";
import { FlexColumn, FlexRow } from "@/components/UI";

export const Wrapper = styled(FlexColumn)`
  gap: 0.6rem;
  padding: 0.3rem 0 2rem;
`;

export const TableGroup = styled(FlexRow)`
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 0.8rem;
`;

export const StyledRadioGroup = styled(RadioGroup)`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const Actions = styled(FlexRow)`
  gap: 12.5rem;
`;

export const Duration = styled.div`
  width: 12.5rem;
  gap: 12.5rem;
`;
