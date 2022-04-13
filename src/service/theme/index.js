import { createTheme } from "@mui/material";
import { green, purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500]
    },
    secondary: {
      main: green[700]
    }
  },
  typography: {
    fontFamily: [
      "Poppins"
    ].join(','),
  },
});

export default theme;
