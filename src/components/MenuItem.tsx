import React from 'react'
import type {MenuItem} from "../types"

type MenuItemProps = {
  item: MenuItem,
  addItem: (item: MenuItem) => void
}

export default function MenuItem({item, addItem} : MenuItemProps) {
  return (
    <button
     className="border-2 border-lime-800 hover:bg-lime-300 w-full p-3 flex justify-between mb-5"
       onClick={() => addItem(item)} >

       <p>{item.name}</p>
       <p className='font-black'>${item.price}</p>
    </button>
  )
}
