import "./styleItem.css";
import { useParams } from "react-router-dom";
import { useState, useEffect} from "react";
import { SelectAllCatagories } from "../../Store/Reducers/CatagoriesReducer.js/CatagorySelector";
import { useSelector } from "react-redux";
import { addToWishList } from "../../Firebase/firebase";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../Store/Reducers/CartReducer/cartActions";
import { fetchAndDispatchCategories } from "../../Store/Reducers/CatagoriesReducer.js/CatagoryAction";
const DisplayItem = ()=> {
  const {itemId} = useParams();
  const [selectedItem, setselectedItem] = useState();
  const AllCatagories = useSelector(SelectAllCatagories);
  const currentUser = useSelector((state)=> state.user.currentUser);
  const cartItems = useSelector((state)=> state.cart.cartItems);
  const [selectedSize, setSelectedSize] = useState("M")

  const dispatch =useDispatch();
  const addItemtoWish = async ()=> {
    if(currentUser){
      await addToWishList(currentUser.id, selectedItem);
      
    }else{
      alert("Log in to add items to your wishlist!")
    }
  }
  const addSelectedItemToCart = ()=>{
    
    dispatch(addItemToCart({...selectedItem, size:selectedSize},cartItems ))

    console.log(cartItems)
  }

  useEffect( ()=>{

    fetchAndDispatchCategories(dispatch)
    const findSelectedItem = async() => {
      const item= await AllCatagories.find((item) => item.id == itemId);
      setselectedItem(item)

    }
    findSelectedItem();
  },[dispatch])


    return(
      <> { 
       selectedItem &&
    <div className="container">

   <div className="itemImage">
        
        <img id="item" src={selectedItem.image} alt={`an image of ${selectedItem.title} `}/>
    </div>

    <div className="itemclassName">
     
    <h1 id="title">{selectedItem.title}</h1>
    <h4>{selectedItem.descripton}</h4>
    <br/>
    <p>${selectedItem.price}</p>
    <p>Colour: {selectedItem.color}</p>
    <br/>

    <div className="sizeGroup">
    <button className={` ${selectedSize === "S" ? "selectedSizebtn" : "sizebtn"} `}
      onClick={()=> setSelectedSize("S")}
    >
        S
    </button>
    <button className={` ${selectedSize === "M" ? "selectedSizebtn" : "sizebtn"} `}
    onClick={()=> setSelectedSize("M")}
    >
        M
    </button>
    <button className={` ${selectedSize === "L" ? "selectedSizebtn" : "sizebtn"} `}
    onClick={()=> setSelectedSize("L")}
    >
        L
    </button>
    <button className={` ${selectedSize === "XL" ? "selectedSizebtn" : "sizebtn"} `}
    onClick={()=> setSelectedSize("XL")}
    >
        XL
    </button>
    </div>


<div className="itembtns">
<button className="addItemToWishList"  onClick={addItemtoWish} role="button" aria-label="Add item to your wishlist">
    Add to Wishlist
</button>

<button className="addItemTocart" onClick={addSelectedItemToCart} role="button" aria-label="Add items to your cart bag">
    Add to shopping cart
</button>
</div>

</div>


    </div>
  }
    </>
    )
}

export default DisplayItem;
