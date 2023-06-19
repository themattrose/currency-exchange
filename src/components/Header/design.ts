import { COLORS } from "@/constants/colors";
import styled from "@emotion/styled";
import { Container, Tab, Tabs } from "@mui/material";

export const Wrapper = styled(Container)`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.125rem;
  color: ${COLORS.TEXT_DEFAULT};
  opacity: 0.7;
  font-family: Poppins;

  & .title {
    font-weight: 100;
    font-family: inherit;
    color: inherit;
    & .bold {
      font-family: inherit;
      font-weight: bold;
      color: inherit;
    }
  }
`;
