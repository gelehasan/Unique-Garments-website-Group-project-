import './CartBagStyle.css';
import { useContext, useState } from 'react';
import { CartShopConext } from '../../Context/cartShopContext';
import { useSelector } from 'react-redux';
import { addItemToCart, decreaseItemQuanity } from '../../Store/Reducers/CartReducer/cartActions';
import { getTotalPrice } from '../../Store/Reducers/CartReducer/cartSelector';
import { useDispatch } from 'react-redux';
import MinusIcon from "../../Assets/minus.svg"
import PlusIcon from "../../Assets/plus.svg"

const CartBag = ()=>{
   // const {bagItem, isCheckoutOpen, setIsCheckoutOpen} = useContext(CartShopConext);
    const cartItems = useSelector((state)=> state.cart.cartItems);
    const getTotal = useSelector(getTotalPrice)
    const dispatch= useDispatch();

    
    const increaseQuantity = (itemId)=>{
        const selectedItem = cartItems.find((item)=> item.id == itemId);
       
        dispatch(addItemToCart(selectedItem, cartItems))
    }

    const decreaseQuantity = (itemId)=>{
     const selectedItem = cartItems.find((item)=> item.id == itemId);
        dispatch(decreaseItemQuanity(selectedItem, cartItems))
    }
  
    return(
        <div    className="bagItems">
{
    cartItems.length > 0? 
    <div className='item-container'>   
    {cartItems.map((item)=>{
            return(<div  key={item.id} className='items'> 
              <div className='cartItemImage'> 
               <img src={item.image} /> </div>
               
               <div className='cartDescription'>  
                <h2>{item.title}</h2>

            <img src={MinusIcon} onClick={()=> decreaseQuantity(item.id)}/>   
            <span className='quantity'>{item.quantity}</span>
            <img className='plusIcon' src={PlusIcon} onClick={()=> increaseQuantity(item.id)} />  

                <span className='price'> ${item.price} </span>
               </div>
            </div>)
        })}
        <h3 className='totalPrice'> Total: ${getTotal} </h3>
        <button className='checkoutBtn'> 
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