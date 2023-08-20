import { getWishList } from "../../Firebase/firebase";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import DisplayWishListItems from "../../Components/WishListItems/DisplayWishListItems";
import "./wishListStyle.css"
const WishList = ()=>{
    const currentUser = useSelector((state )=> state.user.currentUser);
    const [wishListData, setWishlistDat] = useState([]);

useEffect(()=>{

    const fetchUserWishList= async ()=>{
        if(currentUser){ 
           const {wishlist} = await getWishList(currentUser.id); 

           console.log(wishlist)
             setWishlistDat(wishlist);
      
        }
       }

       fetchUserWishList();
},[])
    
    return(
        <div className="wishListContainer">
        
           {
            
            wishListData.map((items)=> {
               
                return(
                   
                  <DisplayWishListItems  key={items.id} item={items}/>
              
                )
                }
            )
        
           }
          
        </div>
    )
}

export default WishList;