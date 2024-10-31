import { produce } from 'immer'
import { Actions, ActionTypes } from './actions'

export interface Order {
  id: number
}

export function OrderReducer(state: Order, action: Actions) {
  switch (action.type) {
    case ActionTypes.CHECKOUT:
      return produce(state, (draft) => {
        draft.id = action.payload.order.id
        action.payload.callback(`/order/${draft.id}/success`)
      })
    default:
      return state
  }
}
