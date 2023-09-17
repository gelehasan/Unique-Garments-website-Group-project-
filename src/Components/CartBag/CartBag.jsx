import './CartBagStyle.css';
import { useSelector } from 'react-redux';
import { getTotalPrice } from '../../Store/Reducers/CartReducer/cartSelector';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCartVisibility } from '../../Store/Reducers/CartReducer/cartActions';
import CartItems from './CartItems';

const CartBag = ({isCheckOutPage})=>{
    const cartItems = useSelector((state)=> state.cart.cartItems);
    const isCartOpen = useSelector((state)=> state.cart.isCartOpen);
    const getTotal = useSelector(getTotalPrice)
    const dispatch= useDispatch();

    const setCart = () => {
        dispatch(setCartVisibility(!isCartOpen));
      };
    

  
    return(
        <div className={`${isCheckOutPage ? "checkOutItems" : "bagItems"}`}>
        {cartItems.length > 0 ? (
            <div className={`${isCheckOutPage ? "item-container checkoutItemContainer" : "item-container"}`}>
            
            
            { //Items are iterated and displayed here
              cartItems && <CartItems cartItems={cartItems} isCheckOutPage={isCheckOutPage} />
            }

            {!isCheckOutPage && (
                <h3 className='totalPrice' tabIndex="0"> Total: ${getTotal} </h3>
            )}

            {isCheckOutPage ? (
                <div className='checkOutPageDiv'>
                <Link to={"/payment"}>
                    <button className='paymentbtn' role="button" aria-label="Proceed to payment"> 
                    Proceed to payment
                    </button>
                </Link>
                </div>
            ) : (
                <Link to={"/checkout"}>
                <button
                    className='checkoutBtn'
                    onClick={setCart}
                    role="button"
                    aria-label="Go to the checkout page"
                >
                    Go to the checkout
                </button>
                </Link>
            )}
            </div>
        ) : (
            <div className='emptyBag'>
            <h3>Please add items to your bag</h3>
            </div>
        )}
        </div>

    )
}

export default CartBag;