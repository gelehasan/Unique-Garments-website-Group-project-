import "./wishListStyle.css";
import { removeItemFromWIshList } from "../../Firebase/firebase";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const DisplayWishListItems = ({item})=>{
    const { id, urlLink, title, price, image} = item;
    const currentUser = useSelector((state)=> state.user.currentUser);

    const removeFromWishList =  async ()=>{
        await removeItemFromWIshList(currentUser.id, item);
        window.location.reload();
    }
    console.log(item)

    return(
        <div    className="wishListItem" >

    <span 
    className="removebtn" 
    onClick={removeFromWishList} 
    tabIndex="0" 
    aria-label={`Click to remove ${title} item from your wishlist`}>
    Remove 
    </span>
            <div    className="divImage">¨
            <Link to={`/${urlLink}/${id}`}> 
            <img className='productImage' src={image} alt={title}/>    
            </Link>            
            </div>

            <div className="WishListdescription">
                <h4>{title}</h4>
                <h3>${price}</h3>
            </div>
        </div>
    )
}

export default DisplayWishListItems;






