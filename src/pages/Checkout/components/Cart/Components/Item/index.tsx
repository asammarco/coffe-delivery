import {
  ButtonRemove,
  ItemButtons,
  ItemContainer,
  ItemDescription,
  ItemDetails,
  ItemSummary,
} from './styles'
import { Purchase } from '../../../../../../components/Purchase'
import { Trash } from 'phosphor-react'
import { priceFormatter } from '../../../../../../utils/formatter'
import { useContextSelector } from 'use-context-selector'
import { OrderContext } from '../../../../../../context/OrderContext'

interface ItemProps {
  item: {
    id: number
    imageUrl: string
    name: string
    price: number
    quantity: number
  }
}

export function Item({ item }: ItemProps) {
  const { updateCart } = useContextSelector(OrderContext, (context) => {
    return context
  })

  function handleRemoveItem() {
    updateCart({ ...item, quantity: 0 })
  }

  return (
    <ItemContainer>
      <ItemDetails>
        <img src={item.imageUrl} alt={item.name} />
        <ItemDescription>
          <span>{item.name}</span>
          <ItemButtons>
            <Purchase
              item={{
                id: item.id,
                imageUrl: item.imageUrl,
                name: item.name,
                price: item.price,
                quantity: item.quantity,
              }}
            />
            <ButtonRemove onClick={handleRemoveItem}>
              <Trash size={16} />
              REMOVER
            </ButtonRemove>
          </ItemButtons>
        </ItemDescription>
      </ItemDetails>
      <ItemSummary>
        <span>
          R$ {priceFormatter.format((item.price * item.quantity) / 100)}
        </span>
      </ItemSummary>
    </ItemContainer>
  )
}
