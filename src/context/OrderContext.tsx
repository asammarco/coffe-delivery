import { ReactNode, useCallback, useEffect, useReducer, useState } from 'react'
import { createContext } from 'use-context-selector'
import { CartReducer } from '../reducers/cart/reducer'
import { deleteCartAction, updateCartAction } from '../reducers/cart/actions'
import { OrderReducer } from '../reducers/order/reducer'
import { useNavigate } from 'react-router-dom'
import { api } from '../lib/axios'
import { checkoutAction } from '../reducers/order/actions'

interface Item {
  id: number
  imageUrl: string
  name: string
  price: number
  quantity: number
}

interface Cart {
  items: Item[]
}

interface OrderProviderProps {
  children: ReactNode
}

interface CreateOrderData {
  paymentType: string
  cep: string
  rua: string
  numero: number
  bairro: string
  cidade: string
  estado: string
  complemento?: string
}

interface Order {
  id: number
  address: {
    cep: string
    rua: string
    numero: number
    bairro: string
    cidade: string
    estado: string
    complemento: string
  }
  paymentType: string
  cart: Cart
}

interface OrderType {
  cart: Cart
  orders: Order[]
  updateCart: (item: Item) => void
  checkout: (data: CreateOrderData) => void
}

export const OrderContext = createContext({} as OrderType)

export function OrderProvider({ children }: OrderProviderProps) {
  const navigate = useNavigate()
  const [cartState, dispatchCart] = useReducer(CartReducer, { items: [] })
  const [orderState, dispatchOrder] = useReducer(OrderReducer, { id: 0 })
  const [orders, setOrders] = useState<Order[]>([])

  function updateCart(item: Item) {
    dispatchCart(updateCartAction(item))
  }

  function deleteCart() {
    dispatchCart(deleteCartAction())
  }

  const cart = cartState

  const createOrder = useCallback(
    async (data: CreateOrderData) => {
      try {
        if (cart.items.length > 0) {
          const response = await api.post('orders', {
            address: {
              cep: data.cep,
              rua: data.rua,
              numero: data.numero,
              bairro: data.bairro,
              cidade: data.cidade,
              estado: data.estado,
              complemento: data.complemento,
            },
            paymentType: data.paymentType,
            cart: cart,
          })
          return response.data.id
        }
      } catch (error) {
        console.error(error)
      }
    },
    [cart],
  )

  function checkout(data: CreateOrderData) {
    createOrder(data)
      .then((response) => {
        dispatchOrder(checkoutAction({ id: Number(response) }, navigate))
      })
      .finally(() => {
        deleteCart()
      })
  }

  const order = orderState

  const fetchOrders = useCallback(async () => {
    if (order?.id) {
      const response = await api.get('orders')

      setOrders(response.data)
    }
  }, [order])

  useEffect(() => {
    fetchOrders()
  }, [fetchOrders])

  return (
    <OrderContext.Provider value={{ cart, updateCart, checkout, orders }}>
      {children}
    </OrderContext.Provider>
  )
}