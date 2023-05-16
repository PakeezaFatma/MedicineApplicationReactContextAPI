import React, { useContext } from 'react'
import { MedContext } from '../Store/Context'

const Cart = (props) => {
    const ShowCrtList=useContext(MedContext);
    
  return (
    <>
    <div><h1>Cart</h1>
        {ShowCrtList.CartData.map((i)=>{
        return(<ul>
            <li><h4>{i.Medicine}</h4> ${i.Price} </li>
            <span>X {i.amount}</span>
            <button >+</button>
        </ul>
      
        )
        
    })}</div>
    <button type='button' onClick={()=>ShowCrtList.SetShowCart()}>Close Cart</button>
    </>
  )
}

export default Cart