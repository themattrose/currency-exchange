import { COLORS } from "@/constants/colors";
import { createTheme } from "@mui/material";
import { teal } from "@mui/material/colors";

const useThemeProvider = () => {
  const theme = createTheme({
    palette: {
      primary: teal,
      text: { primary: COLORS.TEXT_DEFAULT },
      warning: { main: COLORS.WARN },
    },
  });

  return { theme };
};

export { useThemeProvider };
