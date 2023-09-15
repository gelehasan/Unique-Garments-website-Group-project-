import Payment from "../../Components/Payment/payment"
import { Helmet } from "react-helmet";
const PaymentPage = ()=>{

    return(
      <>
      <Helmet>
      <title>Payment page</title>
      <meta name='description' 
      content='This is payment page, 
      please dont enter your actual credit card, 
      this is just a testing website and we dont actually sell items' /> 
      </Helmet> 

      
      <Payment />
     

      </>
    )
}


export default PaymentPage;