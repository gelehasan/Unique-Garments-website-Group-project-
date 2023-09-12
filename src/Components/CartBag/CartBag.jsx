import './CartBagStyle.css';
import { useContext, useState } from 'react';
import { CartShopConext } from '../../Context/cartShopContext';
import { useSelector } from 'react-redux';
import { addItemToCart, decreaseItemQuanity } from '../../Store/Reducers/CartReducer/cartActions';
import { getTotalPrice } from '../../Store/Reducers/CartReducer/cartSelector';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import MinusIcon from "../../Assets/minus.svg"
import PlusIcon from "../../Assets/plus.svg"
import { setCartVisibility } from '../../Store/Reducers/CartReducer/cartActions';

const CartBag = ({isCheckOutPage})=>{
    const cartItems = useSelector((state)=> state.cart.cartItems);
    const isCartOpen = useSelector((state)=> state.cart.isCartOpen);
    const getTotal = useSelector(getTotalPrice)
    const dispatch= useDispatch();

    const setCart = () => {
        dispatch(setCartVisibility(!isCartOpen));
      };
    
    const increaseQuantity = (itemId)=>{
        const selectedItemUpated= cartItems.find((item)=> item.id == itemId);
       
        dispatch(addItemToCart(selectedItemUpated, cartItems))
    }

    const decreaseQuantity = (itemId)=>{
     const selectedItemUpated = cartItems.find((item)=> item.id == itemId);
        dispatch(decreaseItemQuanity(selectedItemUpated, cartItems))
    }
  
    return(
        <div    className={`${isCheckOutPage ? "checkOutItems" : "bagItems"}`}>
{
    cartItems.length > 0? 
    <div className={`${isCheckOutPage ? "item-container checkoutItemContainer" : "item-container"}`} >   
    {cartItems.map((item)=>{
            return(<div  key={item.id} className={`${isCheckOutPage ? "items checkOutItemDiv" : "items"}`}> 
              <div className={`${isCheckOutPage ? "checkOutCartImage" : "cartItemImage"}`} > 
               <img src={item.image} /> </div>
               
               <div className='cartDescription'>  
                <h2>{item.title}</h2>

            <img src={MinusIcon} onClick={()=> decreaseQuantity(item.id)}/>   
            <span className='quantity'>{item.quantity}</span>

            <img className='plusIcon' src={PlusIcon} onClick={()=> increaseQuantity(item.id)} />  

                <span className='price'> ${item.price} </span>
               </div>

            </div>
            )
        })}

       {!isCheckOutPage && <h3 className='totalPrice'> Total: ${getTotal} </h3> } 

   
             
        {isCheckOutPage ?  
                 <div className='checkOutPageDiv'> 
         <Link to={"/payment"}><button className='paymentbtn'> 
         Proceed to payment  </button>
     </Link> 
     </div>
            :

         <Link to={"/checkout"}><button className='checkoutBtn' onClick={setCart}> 
            Go to the checkout  </button>
            </Link> 
      
        }

        </div> : 

       <div    className='emptyBag'>
            <h3>Please add items to your bag</h3>
            </div>
}
  
        </div>
    )
}

export default CartBag;