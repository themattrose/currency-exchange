import { COLORS } from "@/constants/colors";
import styled from "@emotion/styled";
import { Container, css } from "@mui/material";
import { FlexRow } from "../UI";

export const Wrapper = styled(Container)`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.125rem;
  color: ${COLORS.TEXT_DEFAULT};
  opacity: 0.7;
  font-family: Poppins;

  & .logo {
    color: ${COLORS.PRIMARY};
    margin-right: 0.125rem;
  }

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

export const NavItems = styled(FlexRow)``;

export const NavItem = styled.a<{ isActive?: boolean }>`
  text-transform: uppercase;
  cursor: pointer;
  font-size: 0.875rem;
  padding: 1rem 1.25rem;
  ${({ isActive }) =>
    isActive
      ? css`
          border-bottom: 2px solid ${COLORS.PRIMARY};
          color: ${COLORS.TEXT_DEFAULT};
        `
      : css`
          border-bottom: 2px solid transparent;
          color: ${COLORS.TEXT_HEADER};
        `}
`;
