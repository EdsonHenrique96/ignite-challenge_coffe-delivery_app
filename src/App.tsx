import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/global'
import { DefaultTheme } from './styles/themes/defaultTheme'

import { Router } from './Router'

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  )
}

export default App
