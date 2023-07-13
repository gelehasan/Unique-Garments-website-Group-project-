import ShopBYObject from "../../Components/ShopByObject/shopByobject"
import NewRelease from "../../Components/NewRelease/newRelease"
import Magazine from "../../Components/Magazine/magazineSection"
import Discount from "../../Components/Discounts/discount"
const HomePage = ()=>{

    return(
     <div> 
        <ShopBYObject/>
        <NewRelease/>
        <Magazine />
        <Discount />
        </div>  
      
    )
}

export default HomePage;