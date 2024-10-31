import { ShoppingCart } from 'phosphor-react'
import {
  BodyCard,
  CartButton,
  CoffeeCard,
  FooterCard,
  FooterCardButtons,
  HeaderCard,
  HeaderCardTag,
  Price,
} from './styles'
import { Purchase } from '../../../../components/Purchase'
import { priceFormatter } from '../../../../utils/formatter'
import { NavLink } from 'react-router-dom'

export interface CoffeProps {
  coffee: {
    id: number
    imageUrl: string
    name: string
    properties: string[]
    description: string
    price: number
  }
  quantity: number
}

export function Coffee({ coffee, quantity }: CoffeProps) {
  return (
    <CoffeeCard>
      <HeaderCard>
        <img src={coffee.imageUrl} alt={coffee.name} />
        <HeaderCardTag>
          {coffee.properties.map((prop) => {
            return <span key={prop}>{prop}</span>
          })}
        </HeaderCardTag>
      </HeaderCard>
      <BodyCard>
        <strong>{coffee.name}</strong>
        <p>{coffee.description}</p>
      </BodyCard>
      <FooterCard>
        <Price>
          <span>R$</span>
          <strong>{priceFormatter.format(coffee.price / 100)}</strong>
        </Price>
        <FooterCardButtons>
          <Purchase
            item={{
              id: coffee.id,
              imageUrl: coffee.imageUrl,
              name: coffee.name,
              price: coffee.price,
              quantity: quantity,
            }}
          />
          <NavLink to="checkout" title="shopping cart">
            <CartButton>
              <ShoppingCart weight="fill" size={22} />
            </CartButton>
          </NavLink>
        </FooterCardButtons>
      </FooterCard>
    </CoffeeCard>
  )
}
