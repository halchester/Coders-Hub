import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#f28b04",
    },
    secondary: {
      main: "#595959",
    },
  },
  typography: {
    fontFamily: ["Poppins"],
  },
});

export default theme;
