import {
  ADD_ITEM,
  DEL_ITEM,
  DEL_ALL_ITEM,
  INPUTVAL
} from './actionTypes'

export const addItem = (text="")=>({type: ADD_ITEM, text: text})
export const delItem = (text="")=>({type: DEL_ITEM, text: text})
export const delAllItem = (text="")=>({type: DEL_ALL_ITEM, text: text})
export const iptchange = (text="")=>({type: INPUTVAL, text: text})