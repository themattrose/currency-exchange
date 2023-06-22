import FindReplaceIcon from "@mui/icons-material/FindReplace";
import { Logo, NavItem, NavItems, Wrapper } from "./design";
import AppBar from "@mui/material/AppBar";
import { NAV_ITEMS } from "./constants";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
  const { pathname } = useRouter();

  return (
    <AppBar position="static" color="inherit" elevation={1}>
      <Wrapper>
        <Logo>
          <FindReplaceIcon className="logo" />
          <span className="title">
            Currency
            <span className="bold">Exchange</span>
          </span>
        </Logo>
        <NavItems>
          {NAV_ITEMS.map(({ label, href }) => (
            <Link href={href} key={label} legacyBehavior>
              <NavItem isActive={pathname === href}>{label}</NavItem>
            </Link>
          ))}
        </NavItems>
      </Wrapper>
    </AppBar>
  );
};

export { Header };
