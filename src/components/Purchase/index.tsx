import { Minus, Plus } from 'phosphor-react'
import { PurchaseContainer } from './style'
import { useEffect, useState } from 'react'
import { useContextSelector } from 'use-context-selector'
import { OrderContext } from '../../context/OrderContext'

interface Item {
  id: number
  imageUrl: string
  name: string
  price: number
  quantity: number
}

interface PurchaseProps {
  item: Item
}

export function Purchase({ item }: PurchaseProps) {
  const [handleEffect, setHandleEffect] = useState(false)
  const [quantity, setQuantity] = useState(item.quantity || 0)

  const { cart, updateCart } = useContextSelector(OrderContext, (context) => {
    return context
  })

  function handleAdd() {
    setQuantity((state) => state + 1)
    setHandleEffect(true)
  }

  function handleRemove() {
    setQuantity((state) => (state === 0 ? state : state - 1))
    setHandleEffect(true)
  }

  useEffect(() => {
    if (handleEffect !== false) {
      const { id, name, imageUrl, price } = item
      updateCart({ id, name, imageUrl, price, quantity })
      setHandleEffect(false)
    }
  }, [item, quantity, handleEffect, updateCart, cart])

  return (
    <PurchaseContainer>
      <button onClick={handleRemove}>
        <Minus weight="bold" size={14} />
      </button>
      <span>{quantity}</span>
      <button onClick={handleAdd}>
        <Plus weight="bold" size={14} />
      </button>
    </PurchaseContainer>
  )
}
