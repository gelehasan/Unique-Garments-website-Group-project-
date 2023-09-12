import "./wishListStyle.css";
import { removeItemFromWIshList } from "../../Firebase/firebase";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const DisplayWishListItems = ({item})=>{
    const { id, urlLink, name, price, image} = item;
    const currentUser = useSelector((state)=> state.user.currentUser);

    const removeFromWishList =  async ()=>{
        await removeItemFromWIshList(currentUser.id, item);
        window.location.reload();
    }
    console.log(item)

    return(
        <div    className="wishListItem" >

<span className="removebtn" onClick={removeFromWishList}>Remove </span>
            <div    className="divImage">¨
            <Link to={`/${urlLink}/${id}`}> 
            <img className='productImage' src={image} />    
            </Link>            
            </div>

            <div className="description">
                <h4>{name}</h4>
                <h3>${price}</h3>
            </div>
        </div>
    )
}

export default DisplayWishListItems;






