import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/global'
import { DefaultTheme } from './styles/themes/defaultTheme'
// import { Home } from './pages/Home'
import { Checkout } from './pages/Checkout'

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />
      <Checkout />
    </ThemeProvider>
  )
}

export default App
