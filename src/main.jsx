import ReactDOM from 'react-dom/client'
import LandingPage from './pages/LandingPage/LandingPage'
import { GlobalStyle } from './styles/global.style'
import { ThemeProvider } from 'styled-components'
import { ThemeProviderStyle } from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <ThemeProvider theme={ThemeProviderStyle}>
      <GlobalStyle></GlobalStyle>
      <LandingPage />
    </ThemeProvider>
  </>
)
