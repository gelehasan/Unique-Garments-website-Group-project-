import { getWishList } from "../../Firebase/firebase";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import DisplayWishListItems from "../../Components/WishListItems/DisplayWishListItems";
import { Helmet } from "react-helmet";
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
},[currentUser])
    
    return(
        <div className="wishListContainer">
         <Helmet>
        <title>Wish list page</title>
        <meta name='description' content='Log in if you have an account' /> 
      </Helmet>
           {wishListData && wishListData.length > 0 ?  
            
            wishListData.map((items)=> {
               
                return(
                   
                  <DisplayWishListItems  key={items.id} item={items}/>
              
                )
                }
            )
                :
                <div>
                    <h3>Nothing to display here</h3>
                </div>
           }
          
        </div>
    )
}

export default WishList;