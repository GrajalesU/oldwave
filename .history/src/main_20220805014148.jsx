import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvider} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline';
import './index.css'
import {theme} from './style/Theme'


ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <CssBaseline/>
    <App />
  </ThemeProvider>
  
)
