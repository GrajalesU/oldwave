import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createTheme, ThemeProvider, styled} from '@mui/material/styles'
import './index.css'

import Theme from './theme/Theme'

const theme = Theme()

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
  
)
