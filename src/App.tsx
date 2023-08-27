import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/global'
import { DefaultTheme } from './styles/themes/defaultTheme'
import { Home } from './pages/Home'

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  )
}

export default App
