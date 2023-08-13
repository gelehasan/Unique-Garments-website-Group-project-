import './Products.css';
import { CartShopConext } from '../../Context/cartShopContext';
import { useContext } from 'react';
import heartIcon from "../../Assets/heart.svg";


const Product = ({item})=>{
    const {addItem,bagItem, setbagItem} = useContext(CartShopConext);

    const addCurrentItem =  async ()=>{
    const addedItem= await addItem(bagItem,item);
    
   setbagItem(addedItem)

}


    const { name, price, ImageUrl} = item;
    console.log(ImageUrl);
    return(
        <div    className="productItem" >
            <div    className="divImage">
            <img className='productImage' src={ImageUrl} />

            <img src={heartIcon} className='heartEmoji' onClick={addCurrentItem} /> 
            </div>
            <div className="description">
                <h4>{name}</h4>
                <h3>{price}</h3>
            </div>
        </div>
    )
}
export default Product;