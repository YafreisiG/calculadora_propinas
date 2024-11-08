import { menuItems } from "./data/db"
import MenuItem from "./components/MenuItem"
import useOrder from "./hooks/useOrder"
import OrderTotals from "./components/OrderTotals"
import TipForm from "./components/TipForm"
import OrderContent from "./components/OrderContent"
import React, { useReducer } from "react"
import { initialState, orderReducer } from "./reducers/Order-reduce"




function App() {
  const [state, dispatch] = useReducer(orderReducer, initialState)


  return (
    <>
   
    <header className="bg-gradient-to-r from-lime-800 via-lime-400 to-black py-5">
      <h1 className=" text-center text-4xl font-black">Calculadora de propina y consumo</h1>
    </header>

    <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2"> 
    
      <div className="p-5">
      <h2 className="text-4xl font-black">Menu</h2>
         
        <div className="space-y-3 mt-10">
       {menuItems.map(item => (
        <MenuItem
        key={item.id}
        item={item}
        dispatch ={dispatch}
        />
       ))} 
      </div>
      </div>

      <div className="border border-dashed border-stone-300 p-5 rounded-lg space-y-10">
        {state.order.length  ? (
          <>

         <OrderContent
          order={state.order}
          dispatch={dispatch}/>

          <TipForm
          dispatch={dispatch}
          tip={state.tip}/>


           <OrderTotals
           order={state.order}
           tip ={state.tip}
           dispatch={dispatch}
           
                />




          </>
        ): ( <p className='text-center'>Esta vacia</p>)}
       

       </div>
      </main>
    </>
  )
}

export default App
