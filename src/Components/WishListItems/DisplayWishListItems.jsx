import "./wishListStyle.css";


const DisplayWishListItems = ({item})=>{
    const { name, price, image} = item;
    const removeFromWishList = ()=>{

    }
    console.log(item)

    return(
        <div    className="wishListItem" >
            <div    className="divImage">
            <img className='productImage' src={image} />

            <span className="removebtn" onClick={removeFromWishList}>Remove </span>
            </div>
            <div className="description">
                <h4>{name}</h4>
                <h3>{price}</h3>
            </div>
        </div>
    )
}

export default DisplayWishListItems;






