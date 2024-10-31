import { Item } from './reducer'


export enum ActionTypes {
  UPDATE_CART = 'UPDATE_CART',
  DELETE_CART = 'DELETE_CART'
}

export type Actions = | {
  type: ActionTypes.UPDATE_CART,
  payload: {
    item: Item
  }
} |
{
  type: ActionTypes.DELETE_CART
}

export function updateCartAction(item: Item) {
  return {
    type: ActionTypes.UPDATE_CART,
    payload: {
      item,
    },
  } satisfies Actions
}

export function deleteCartAction(){
  return {
    type: ActionTypes.DELETE_CART
  } satisfies Actions
}