import React, { Dispatch } from 'react'
import { MenuItem, OrderItem } from '../types'
import {formatCurrency} from '../Helpers'
import { OrderActions } from '../reducers/Order-reduce'



type ordercontentProps = {
  order: OrderItem[], 
 dispatch: Dispatch<OrderActions>
}

export default function OrderContent({order, dispatch}: ordercontentProps){
  return (
   
    <div>
      <h2 className='font-black text-4xl'>Consumo</h2>

        <div className='space-y-3 mt-10'>
          {order.map (item => (
                <div key={item.id}
                 className='flex justify-between border-t border-gray-400 p-4 '>
                 
                  <div>

                  <p className='text-lg'>
                    {item.name} - {formatCurrency(item.price)}
                  </p>

                  <p className='font-black'>
                    Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
                  </p>
                  </div>

                  <button 
                  className='bg-orange-700 h-8 w-8 rounded-full text-white font-black' 
                  onClick={() => dispatch({type:'remove-item', payload: {id:item.id}})}
                  >
                      X
                  </button> 
                 
       
                </div>
              ))
            }
        </div>
      </div>
     
  
  
  )
}
