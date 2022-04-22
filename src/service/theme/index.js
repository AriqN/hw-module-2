import { createTheme } from "@mui/material";


const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff"
    },
    secondary: {
      main: "#038b5a"
    }
  },
  typography: {
    fontFamily: [
      "Poppins"
    ].join(','),
    button: {
      textTransform: "none",
    }
  },
  
});

export default theme;
