import { COLORS } from "@/constants/colors";
import styled from "@emotion/styled";
import { FlexColumn, FlexRow } from "@/components/UI";

export const StyledResult = styled(FlexRow)``;

export const Wrapper = styled(FlexColumn)`
  justify-content: center;
  gap: 1.5rem;
  margin: 4rem 0;

  & ${StyledResult} {
    display: flex;
    justify-content: center;

    gap: 0.6rem;
    width: 100%;
    font-size: 3rem;
    font-weight: lighter;
    color: ${COLORS.TEXT_DEFAULT};
    text-transform: uppercase;

    & .to {
      color: ${COLORS.ACCENT};
      font-weight: bold;
    }
  }
`;

export const Details = styled(FlexColumn)`
  align-items: center;
  font-weight: 300;
  gap: 0.25rem;
`;
