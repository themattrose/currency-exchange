import FindReplaceIcon from "@mui/icons-material/FindReplace";
import { Logo, Wrapper } from "./design";
import AppBar from "@mui/material/AppBar";
import { Tab, Tabs } from "@mui/material";
import { TABS } from "./constants";
import type { HeaderProps } from "./types";
import { PageUrl } from "@/@enums/pages";

const Header = (props: HeaderProps) => {
  const { activeHref = PageUrl.HOME } = props;

  return (
    <AppBar position="static" color="inherit" elevation={1}>
      <Wrapper>
        <Logo>
          <FindReplaceIcon />
          <span className="title">
            Currency
            <span className="bold">Exchange</span>
          </span>
        </Logo>
        <Tabs value={activeHref}>
          {TABS.map(({ label, href }) => (
            // TODO: use next/link
            <Tab
              key={label}
              value={href}
              href={href}
              label={label}
              // TODO: move it to design
              sx={{ padding: "1.125rem" }}
            />
          ))}
        </Tabs>
      </Wrapper>
    </AppBar>
  );
};

export { Header };
