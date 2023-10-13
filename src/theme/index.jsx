import { createTheme } from "@mui/material";

const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#EB5757',
    },
    secondary: {
      main: '#6200EA',
    },
    background: {
      default: '#FFFFFF',
    },
    text: {
      primary: '#000000',
    },
    // Add any other theme options as needed
  },
});

const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#EB5757',
    },
    secondary: {
      main: '#6200EA',
    },
    background: {
      default: '#121212',
    },
    text: {
      primary: '#FFFFFF',
    },
    // Add any other theme options as needed
  },
});

export { lightTheme, darkTheme };
