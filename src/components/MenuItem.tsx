import React, { Dispatch } from 'react'
import type {MenuItem} from "../types"
import { OrderActions } from '../reducers/Order-reduce'

type MenuItemProps = {
  item: MenuItem,
  dispatch: Dispatch<OrderActions>
}

export default function MenuItem({item, dispatch} : MenuItemProps) {
  return (
    <button
     className="border-2 border-lime-800 hover:bg-lime-300 w-full p-3 flex justify-between mb-5"
       onClick={() => dispatch({type: 'add-item', payload:{item}})} >

       <p>{item.name}</p>
       <p className='font-black'>${item.price}</p>
    </button>
  )
}
