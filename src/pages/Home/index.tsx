import { useContextSelector } from 'use-context-selector'
import { Coffee } from './components/Coffee'
import { Introduction } from './components/Introduction'
import { CoffeeList, CoffeesContainer, HomeContainer } from './styles'
import { CoffeesContext } from '../../context/CoffeesContext'
import { OrderContext } from '../../context/OrderContext'

export function Home() {
  const coffees = useContextSelector(CoffeesContext, (context) => {
    return context.coffees
  })

  const cart = useContextSelector(OrderContext, (context) => {
    return context.cart
  })

  return (
    <HomeContainer>
      <Introduction />
      <CoffeesContainer>
        <h1>Nossos Cafés</h1>
        <CoffeeList>
          {coffees.map((coffee) => {
            return (
              <Coffee
                key={coffee.id}
                coffee={coffee}
                quantity={
                  cart?.items?.find((item) => item.id === coffee.id)?.quantity ||
                  0
                }
              />
            )
          })}
        </CoffeeList>
      </CoffeesContainer>
    </HomeContainer>
  )
}
