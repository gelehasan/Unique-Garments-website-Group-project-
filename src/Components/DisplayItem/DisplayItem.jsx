import "./styleItem.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { SelectAllCatagories } from "../../Store/Reducers/CatagoriesReducer.js/CatagorySelector";
import { useSelector } from "react-redux";
const DisplayItem = ()=> {
  const {itemId} = useParams();
  const [selectedItem, setselectedItem] = useState();
  const AllCatagories = useSelector(SelectAllCatagories);

  useEffect(()=>{
    const item= AllCatagories.find((item) => item.id == itemId);
    setselectedItem(item)
  },[])

  console.log(selectedItem)


    return(
    <div class="container">
    
    <div class="itemImage">
        
        <img id="item" src="https://res.cloudinary.com/dmhnsp8sj/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1691626787/Garments/BlueBalenciagaCap.jpg?_s=public-apps" />
    </div>
    
    <div class="itemClass">
     
    <h1 id="title">Off-White Bookish Drill Baseball Cap</h1>
    <h4>Your everyday baseball cap, simple but elegant.</h4>
    <br/>
    <p>$445.00</p>
    <p>Colour: Blue</p>
    <br/>

    <div class="sizeGroup">
        <button>S</button>
        <button>M</button>
        <button>L</button>
        <button>XL</button>
    </div>

<div className="itembtns">
<button className="addItemToWishList" >
    Add to Wishlist
</button>

<button className="addItemTocart">
    Add to shopping cart
</button>
</div>
</div>

    
    </div>
    )
}

export default DisplayItem;
