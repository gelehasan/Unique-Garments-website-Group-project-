import './CartBagStyle.css';
import { useContext } from 'react';
import { CartShopConext } from '../../Context/cartShopContext';
import { useSelector } from 'react-redux';
import { addItemToCart, decreaseItemQuanity } from '../../Store/Reducers/CartReducer/cartActions';
import { useDispatch } from 'react-redux';

const CartBag = ()=>{
   // const {bagItem, isCheckoutOpen, setIsCheckoutOpen} = useContext(CartShopConext);
    const cartItems = useSelector((state)=> state.cart.cartItems);
    
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
               
                <h2>{item.title}</h2>

                <span className='controlQuantity' onClick={()=> increaseQuantity(item.id)}>
                    +</span>  <span className='controlQuantity' onClick={()=> decreaseQuantity(item.id)}>-</span>
                <span>{item.price} X {item.quantity} </span>
               
            </div>)
        })}
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