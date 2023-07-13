import  './checkout.css';
import { useContext } from 'react';
import { CartShopConext } from '../../Context/cartShopContext';

const CheckOut= ()=>{
    const {bagItem} = useContext(CartShopConext);
  
    return(
        <div class="check-page">
        <div class="form">
       
          <form class="login-form"  action="https://formspree.io/f/xknlnejb" method='POST'>
            <input name='name'  type="text" placeholder="Name" className='userinput' required/>
            <input name='email' type="email" placeholder="email"  className='userinput' required/>
            <input name ="address" type="text"  placeholder="address" className='userinput' required/>
            
            <div  className='boughtItems'>
         {bagItem.map((item)=>{
         return( <input  key={item.id} name={item.name} value={`${item.name}: ${item.price} X ${item.quantity}  `} />)
      })}
            </div>

            <div  className='proceed'>
             <label>You agree these are the items you want to order?</label>
            <input  type="checkbox" placeholder="address" required/>
            </div>
            <button type='submit'>Submit</button>
           
          </form>
        </div>
      </div>
    )
}

export default CheckOut;