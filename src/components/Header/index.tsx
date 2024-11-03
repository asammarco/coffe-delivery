import {
  ActionContainer,
  Badge,
  Cart,
  HeaderContainer,
  HeaderContent,
  LocalizationInfo,
} from './styles'

import logoImg from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContextSelector } from 'use-context-selector'
import { OrderContext } from '../../context/OrderContext'
import { useEffect, useState } from 'react'

export function Header() {
  const [quantityItems, setQuantityItems] = useState(0)

  const {cart, address} = useContextSelector(OrderContext, (context) => {
    return context
  })

  useEffect(() => {

    setQuantityItems(cart?.items?.length)
    
  }, [cart])

  return (
    <HeaderContainer>
      <HeaderContent>
        <NavLink to="/" title="Home">
          <img src={logoImg} alt="" />
        </NavLink>
        <ActionContainer>
          <NavLink to="checkout" title="shopping cart">
            <LocalizationInfo>
              <MapPin weight="fill" size={22} />
              {address.cidade && <span>{address.cidade}, {address.estado}</span>}  
              {!address.cidade && <span>Localização</span>}  
            </LocalizationInfo>
          </NavLink>
          <NavLink to="checkout" title="shopping cart">
            <Cart>
              <ShoppingCart weight="fill" size={22} />
              <Badge hidden={quantityItems > 0 ? false : true}>
                {quantityItems}
              </Badge>
            </Cart>
          </NavLink>
        </ActionContainer>
      </HeaderContent>
    </HeaderContainer>
  )
}
