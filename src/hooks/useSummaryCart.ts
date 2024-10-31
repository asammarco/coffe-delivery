import { useMemo } from 'react'

import { useContextSelector } from 'use-context-selector'
import { OrderContext } from '../context/OrderContext'

export function useSummaryCart() {
  const cart = useContextSelector(OrderContext, (context) => {
    return context.cart
  })

  const summary = useMemo(() => {
    if (cart.items) {
      return cart.items.reduce(
        (acc, item) => {
          acc.total += item.price * item.quantity
          return acc
        },
        {
          total: 0,
        },
      )
    }

    return { total: 0 }
  }, [cart.items])

  return summary
}
