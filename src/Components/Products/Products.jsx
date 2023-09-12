import './Products.css';
import { CartShopConext } from '../../Context/cartShopContext';
import { useContext } from 'react';
import heartIcon from "../../Assets/heart.svg";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../Store/Reducers/CartReducer/cartActions';
import { addToWishList } from '../../Firebase/firebase';
import { UseSelector } from 'react-redux/es/hooks/useSelector';
import { Link } from 'react-router-dom';
const Product = ({item})=>{
   // const {addItem,bagItem, setbagItem} = useContext(CartShopConext);
    const cartItems = useSelector((state)=> state.cart.cartItems);
    const currentUser = useSelector((state)=> state.user.currentUser);
   

    const dispatch = useDispatch();

    const addToYourWishList =  async ()=>{
        
        if(currentUser){
            addToWishList(currentUser.id, item)

        }
        //dispatch(addItemToCart(item, cartItems));

}


    const { id,title, price, image, urlLink} = item;

    return(

        <div    className="productItem" >
             <Link to={`/${urlLink}/${id}`}> 
            <div    className="divImage">
            
            <img className='productImage' src={image} />
           
           
            </div>
            </Link>
             <img src={heartIcon} className='heartEmoji' onClick={addToYourWishList} /> 
            <div className="description">
                <h4>{title}</h4>
                <h3>${price}</h3>
            </div>
        </div>
    )
}
export default Product;