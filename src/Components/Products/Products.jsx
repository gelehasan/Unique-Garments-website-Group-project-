import './Products.css';
import { CartShopConext } from '../../Context/cartShopContext';
import { useContext } from 'react';



const Product = ({item})=>{
    const {addItem,bagItem, setbagItem} = useContext(CartShopConext);

    const addCurrentItem =  async ()=>{
    const addedItem= await addItem(bagItem,item);
    
   setbagItem(addedItem)

}


    const { name, Price, ImageUrl} = item;
    return(
        <div    className="productItem" >
            <div    className="divImage">
            <img className='productImage' src={ImageUrl} />

            <button className='addProduct' onClick={addCurrentItem}> Add product</button>
            </div>
            <div className="description">
                <span>{name}</span>
                <span>{Price}</span>
            </div>
        </div>
    )
}
export default Product;