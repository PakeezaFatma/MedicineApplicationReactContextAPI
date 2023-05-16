import React, { useContext, useState } from 'react'
import { MedContext } from '../Store/Context';

const ShowMed = () => {
  const [amount,setAmount]=useState(1);
    const showData=useContext(MedContext);
    const setAmountHandler=(e)=>{
      setAmount(e.target.value)
  }
//It's only work on button because we bind data through submit handler 
    const submitHandler=(a,b,c)=>{
        const Data={
          id:a,
           Medicine:a,
           Price:b,
           Desp:c,
           amount:amount
        }
        showData.cartSendData(Data);
        console.log(showData.CartData);
    }
  return (
    <div>
    <div>{showData.data.map((i)=>{
       return (<ul>
        <li>
            {i.Med}{ i.pr} {i.des}
             <label>Amount</label>
            <input type='number' value={ amount} onChange={setAmountHandler} min={0} max={5}/>
            
            <button onClick={submitHandler.bind(null, i.Med, i.pr,i.Amount)}>  + Add to Cart</button>
        </li>
    </ul>

   ) })}
       
       
    </div>
    </div>
  )
}

export default ShowMed;