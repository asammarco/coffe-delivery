import { useContextSelector } from 'use-context-selector'
import { Item } from './Components/Item'
import { Summary } from './Components/Summary'
import { ButtonConfirm, CartContainer } from './style'
import { OrderContext } from '../../../../context/OrderContext'
import { NavLink } from 'react-router-dom'

interface CartProps {
  formId: string
}

export function Cart({ formId }: CartProps) {
  const cart = useContextSelector(OrderContext, (context) => {
    return context.cart
  })

  return (
    <CartContainer>
      {cart.items?.map((item) => {
        return <Item key={item.id} item={item} />
      })}
      {(!cart.items || cart.items?.length === 0) && (
        <NavLink to="/" title="Home">
          <h3>Selecione um café</h3>
        </NavLink>
      )}
      <Summary />
      <ButtonConfirm
        type="submit"
        form={formId}
        disabled={!cart.items || cart.items?.length === 0}
      >
        CONFIRMAR PEDIDO
      </ButtonConfirm>
    </CartContainer>
  )
}
