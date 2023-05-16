import React, { useContext, useState } from 'react'
import { MedContext } from '../Store/Context';

const FormUnp = () => {
  const [MedName,setMed]=useState('');
  const [Price,setPrice]=useState('');
  const [desp,setDesp]=useState('');

  const context =useContext(MedContext);


  const setMedHandler=(e)=>{
setMed(e.target.value);

  }

  const setPriceHandler=(e)=>{
    setPrice(e.target.value);
  }
  const setDespHandler=(e)=>{
    setDesp(e.target.value);
  }
  const submitHandler=(e)=>{
    e.preventDefault();
    const DataBind={
      Med:MedName,
      pr:Price,
      des:desp,
      amount:1
      
    }
    console.log(DataBind);
      context.receiveData(DataBind);
      setMed('');
      setDesp('');
      setPrice('')
  }
  

  return (
    
    <div>
      <form onSubmit={submitHandler}>
        <label>MedName</label>
        <input type='text'value={MedName} onChange={setMedHandler}/>

        <label>Price</label>
        <input type='number'value={Price} onChange={setPriceHandler}/>

        <label>Description</label>
        <input type='text' value={desp} onChange={setDespHandler}/>
        <button type='submit'  >+Add Medicine</button>
      </form>

    </div>
  )
}

export default FormUnp