import { createTheme } from '@mui/material/styles';
import PoppinsBold from '../assets/fonts/Poppins-Bold.ttf'

export const theme = createTheme({
    palette: {
      primary: {
        main: "#7444FB",
      },
      secondary: {
        main: "#32D1F7"
      },
      backgroundCard: {
        main: "#f7f7f7"
      },
      white: {
        main: "#fff"
      },
      black: {
        main: "#000"
      }
    },
    typography: {
      fontFamily: [
      `src: local('Poppins'), local('Poppins-Bold'), url(${PoppinsBold}) format('ttf')`
      ]
    }
  });

