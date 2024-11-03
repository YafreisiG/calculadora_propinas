import React, { useMemo, useCallback, Dispatch } from 'react'
import { OrderItem } from '../types'
import { formatCurrency } from '../Helpers'
import TipForm from './TipForm'
import { OrderActions } from '../reducers/Order-reduce'


type  OrderTotalProps = {
    order: OrderItem[], 
    tip: number,
   dispatch: Dispatch<OrderActions>
   
}

export default function OrderTotals({order, tip, dispatch} : OrderTotalProps) {

   const SubtotalAumount = useCallback(() => order.reduce( (total, item) => total + (item.quantity * item.price), 0) , [order])
   const tipAmout = useCallback (() => SubtotalAumount() * tip, [tip, order])
   const TotalAmout = useCallback(() => SubtotalAumount() + tipAmout(), [tip, order])
   

  return (
    <>
    <div className='space-y-3'>
        <h2 className='font-bold text-2xl'>Totales y Propinas:</h2>
        <p>Subtotal a pagar:
            <span className='font-bold'>{formatCurrency(SubtotalAumount())}</span>
        </p>

        <p>Propina:
           <span className='font-bold'>{formatCurrency(tipAmout())}</span>
        </p>

        <p>Total a Pagar:
        <span className='font-bold'>{formatCurrency(TotalAmout( ))}</span>
        </p>
    </div>
    <button className='bg-green-950 w-full p-3 appearance text-white font-bold border disabled:opacity-20'
    disabled={TotalAmout() == 0}
  onClick={()=> dispatch({type: 'place-order'})}>
      Guardar pedido
    </button>
    </>
  )
}
