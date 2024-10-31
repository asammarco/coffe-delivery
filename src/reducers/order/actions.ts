import { NavigateFunction } from "react-router-dom"
import { Order } from './reducer'

export enum ActionTypes{
  CHECKOUT='CHECKOUT'
}

export type Actions = | {
  type: ActionTypes.CHECKOUT,
  payload:{
    order: Order,
    callback: NavigateFunction
  }
}

export function checkoutAction(order: Order, callback: NavigateFunction){
  return {
    type: ActionTypes.CHECKOUT,
    payload: {
      order,
      callback
    }
  } satisfies Actions
}