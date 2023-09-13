import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './styles/global'
import { DefaultTheme } from './styles/themes/defaultTheme'

import { Router } from './Router'
import { CartContextProvider } from './contexts/CartContext'

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />
      <CartContextProvider>
        <Router />
      </CartContextProvider>
    </ThemeProvider>
  )
}

export default App
