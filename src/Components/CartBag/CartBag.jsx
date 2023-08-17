import './CartBagStyle.css';
import { useContext } from 'react';
import { CartShopConext } from '../../Context/cartShopContext';
import { useSelector } from 'react-redux';

const CartBag = ()=>{
    const {bagItem, isCheckoutOpen, setIsCheckoutOpen} = useContext(CartShopConext);
    const cartItems = useSelector((state)=> state.cart.cartItems);
    
  
    return(
        <div    className="bagItems">
{
    cartItems.length > 0? 
    <div className='item-container'>   
    {bagItem.map((item)=>{
            return(<div  key={item.id} className='items'> 
                <h2>{item.name}</h2>
                <h2>{item.price} X {item.quantity} </h2>
               
            </div>)
        })}
        <button className='checkoutBtn' onClick={()=>setIsCheckoutOpen(!isCheckoutOpen)}> 
            Go to the checkout  </button>
        </div> : 

       <div    className='emptyBag'>
            <h3>Please add items to your bag</h3>
            </div>
}
  
        </div>
    )
}

export default CartBag;