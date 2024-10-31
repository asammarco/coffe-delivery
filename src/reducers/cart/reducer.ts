import { produce } from 'immer'
import { Actions, ActionTypes } from './actions'

export interface Item {
  id: number
  imageUrl: string
  name: string
  price: number
  quantity: number
}

export interface Cart {
  items: Item[]
}

export function CartReducer(state: Cart, action: Actions) {
  switch (action.type) {
    case ActionTypes.UPDATE_CART:
      return produce(state, (draft) => {
        if (state.items?.length > 0) {
          const filteredItems = state.items.filter(
            (item) => item.id !== action.payload.item.id,
          )

          if (action.payload.item.quantity === 0) {
            draft.items = filteredItems
          } else {
            draft.items = [...filteredItems, action.payload.item]
          }
        } else {
          draft.items.push(action.payload.item)
        }
      })
    case ActionTypes.DELETE_CART:
      return produce(state, (draft) => {
        draft.items = []
      })
    default:
      return state
  }
}
