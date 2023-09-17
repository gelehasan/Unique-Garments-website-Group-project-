import { useDispatch } from "react-redux";
import { addItemToCart } from "../../Store/Reducers/CartReducer/cartActions";
import { decreaseItemQuanity } from "../../Store/Reducers/CartReducer/cartActions";
import MinusIcon from "../../Assets/minus.svg"
import PlusIcon from "../../Assets/plus.svg"
const CartItems = ({cartItems, isCheckOutPage})=>{
    const dispatch= useDispatch();

    const increaseQuantity = (itemId)=>{
        const selectedItemUpated= cartItems.find((item)=> item.id == itemId);
        dispatch(addItemToCart(selectedItemUpated, cartItems))
    }

    const decreaseQuantity = (itemId)=>{
        const selectedItemUpated = cartItems.find((item)=> item.id == itemId);
        dispatch(decreaseItemQuanity(selectedItemUpated, cartItems))
    }

    return(
    
    cartItems.map((item) => (
        <div key={item.id} className={`${isCheckOutPage ? "items checkOutItemDiv" : "items"}`}>
            
        <div className={`${isCheckOutPage ? "checkOutCartImage" : "cartItemImage"}`}>
            <img src={item.image} alt={item.title} tabIndex="0" />
        </div>
    
        <div className='cartDescription'>
            <h2 tabIndex="0">{item.title}</h2>
    
            <img
            src={MinusIcon}
            onClick={() => decreaseQuantity(item.id)}
            tabIndex="0"
            alt='A minus button, click to decrease quantity'
            />
            <span className='quantity' tabIndex="0">{item.quantity}</span>
    
            <img
            className='plusIcon'
            src={PlusIcon}
            onClick={() => increaseQuantity(item.id)}
            tabIndex="0"
            alt='A plus button, click to increase quantity'
            />
    
            <span className='price' tabIndex="0"> ${item.price} </span>
        </div>
        </div>
    ))
          

    )
}

export default CartItems;