import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './components/Router'
import { CoffeesProvider } from './context/CoffeesContext'
import { OrderProvider } from './context/OrderContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CoffeesProvider>
        <BrowserRouter>
          <OrderProvider>
            <Router />
          </OrderProvider>
        </BrowserRouter>
      </CoffeesProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
