

import { useContext } from 'react';
import Cart from './component/Cart/Cart';
import FormUnp from './component/Form/FormUnp';
import ShowMed from './component/ShowMed/ShowMed';
import { MedContext } from './component/Store/Context';
function App() {
  const showCart1=useContext(MedContext);

  const showCartItem=()=>{
    showCart1.SetShowCart()
    console.log(showCart1);

  }
  let count=0;
        
  showCart1.CartData.forEach((e) => {
    count++;
  });
  return (
    <div className="App">
      <FormUnp/>
      <button onClick={showCartItem }>Cart  {  count}</button>
      <ShowMed/>
      {showCart1.ShowCart && <Cart/>}
    </div>
  );
}

export default App;
