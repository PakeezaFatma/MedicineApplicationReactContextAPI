import React, { useState } from "react";

export const MedContext = React.createContext();
const ContextProvider = (props) => {
    const [data, setData] = useState([]);
    const [cartData,setCratData]=useState([]);

    const[showCart,setShowCart]=useState(false);
    

    const setShowCartHandler=()=>{
        setShowCart(!showCart);
    }
   
    const setCartDataHandler= (item) =>{
      const existing =cartData.find((e)=>e.Medicine ===item.Medicine)
      const IndexFind =cartData.findIndex((t)=>t.Medicine === item.Medicine);
      if(existing)
      {
        existing.Amount=existing.Amount+Number(item.Amount);
        cartData[IndexFind]=existing;
        setCratData([...cartData])
      }
      else
      {
        setCratData([...cartData,item])
      } 
        
    };

    const receiveDataHandler = (item) => {




      
      setData([...data, item]);
      console.log(data);
    };
   
    const contextValue = {
        data: data,
        receiveData: receiveDataHandler,
        cartSendData:setCartDataHandler,
        CartData:cartData,
        ShowCart:showCart,
        SetShowCart:setShowCartHandler
      };
      return (
        <MedContext.Provider value={contextValue}>
          {props.children}
        </MedContext.Provider>
      );
    };
    
    export default ContextProvider;
   
    
    
    
    