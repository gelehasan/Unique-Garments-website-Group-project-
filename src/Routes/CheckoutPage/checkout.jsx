import CartBag from "../../Components/CartBag/CartBag";
import { Helmet } from "react-helmet";
const CheckoutPage = ()=>{

    return(
        <>
        <Helmet>
       <title>Checkout page</title>
       <meta name='description' content='This is the check out page it shows items you have selected to purchase' /> 
     </Helmet>  
        <CartBag isCheckOutPage={true}/>
        </>
    )
}


export default CheckoutPage;