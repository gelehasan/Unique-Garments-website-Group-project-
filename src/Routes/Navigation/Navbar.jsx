import logo from '../../Assets/logo.png';
import cartIcon from '../../Assets/shopping-cart.svg';
import userIcon from '../../Assets/user.svg';
import './nav.css';
import '../../Components/ShopBY/shopBYStyle.css';
import ShopBY from '../../Components/ShopBY/shopBY';
import { useState } from 'react';
const Navbar = ()=>{
        //We use usestate to determine if we show the drop down or not
        // Use state can be used to store many thing such as arrays, etcs not just boolean 
        //In this case see it as a variable with boolean expersion 
        //which changes based on the action performed
        const [isShopBY, setShopBY]= useState(false);


    

    return(

      <div    className="navbar">

        <div className="navTop"> 

            <div className="profile">    
            <img  src={ userIcon}/>
          </div>
   

       <div    className="Logo">
        <img  src={logo }/>
        </div>
     
        <div   className="Cart">
        <img  src={cartIcon }/>
        </div>
        
        
        </div>

     

        <div    className="navBottom">

       
        <div    className="navLinks">
            <ul>
           
              
                <li> <a href='#'> New Arrivals </a></li>
                <li><a href='#'>  Brands</a></li>
                <li><a href='#'> Garments</a></li>
                <li><a href='#'> Shoes</a></li>
                {/* When a user hovers over shop by its set to true and shows the drop down
                    When it leaves it set to false
                */}
                <li onMouseEnter={()=>setShopBY(true)}  onMouseLeave={()=> setShopBY(false)}>
                    <a href='#'> Shop By</a>
                   { <ShopBY isShopBY={isShopBY}  setShopBY={setShopBY}/>}
                    </li>
                <li><a href='#'> Magazine</a> </li>
            </ul>
        </div>

        </div>


        </div>
    )
}


export default Navbar;