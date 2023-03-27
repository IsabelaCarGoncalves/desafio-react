import {  createTheme } from '@mui/material/styles'
import { cyan, red, grey } from '@mui/material/colors';

export const DarkTheme = createTheme({
  palette: {
    primary: {
      main: red[900],
      dark: red[900],
      light: grey[500],
      contrastText: '#ffff',
    },
    secondary: {
      main: cyan[500],
      dark: cyan[400],
      light: cyan[300],
      contrastText: '#ffff',
    },
    background: {
      paper: '#ffff',
      default: '#ffff',
    }
  }
});