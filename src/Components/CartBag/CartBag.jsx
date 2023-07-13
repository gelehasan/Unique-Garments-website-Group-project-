import './CartBagStyle.css';
import { useContext } from 'react';
import { CartShopConext } from '../../Context/cartShopContext';
const CartBag = ()=>{
    const {bagItem, isCheckoutOpen, setIsCheckoutOpen} = useContext(CartShopConext);
    console.log(bagItem)
    return(
        <div    className="bagItems">
{
    bagItem.length > 0? 
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