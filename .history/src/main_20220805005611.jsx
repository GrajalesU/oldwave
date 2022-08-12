import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createTheme, ThemeProvider, styled} from '@mui/material/styles'
import './index.css'

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
  
)
