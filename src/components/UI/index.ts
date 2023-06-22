import { COLORS } from "@/constants/colors";
import styled from "@emotion/styled";
import { Container } from "@mui/material";

export const StyledContainer = styled(Container)`
  margin-bottom: 2rem;
`;

export const PageTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin: 2rem 0;
  color: ${COLORS.TEXT_DEFAULT};
`;

export const SectionTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 1rem 0;
  color: ${COLORS.TEXT_DEFAULT};
`;

export const FlexRow = styled.div`
  display: flex;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
