import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/global'
import { DefaultTheme } from './styles/themes/defaultTheme'

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <h1>Coffe Delivery</h1>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
