import logo from '../../Assets/logo.png';
import cartIcon from '../../Assets/shopping-cart.svg';
import userIcon from '../../Assets/user.svg';
import closeBtn from '../../Assets/xmark.svg';
import openBtn from '../../Assets/menu.svg';
import { Outlet } from 'react-router-dom';
import './nav.css';
import '../../Components/ShopBY-links/shopBYStyle.css';
import ShopBY from '../../Components/ShopBY-links/shopBY';
import { useState } from 'react';
import CartBag from '../../Components/CartBag/CartBag';
import { useContext } from 'react';
import { CartShopConext } from '../../Context/cartShopContext';
import CheckOut from '../CheckOut-for-MVP/checkout';
const Navbar = ()=>{
        //We use usestate to determine if we show the drop down or not
        // Use state can be used to store many thing such as arrays, etcs not just boolean 
        //In this case see it as a variable with boolean expersion 
        //which changes based on the action performed
        const [isShopBY, setShopBY]= useState(false);
        const [showMenu, setshowMenu]= useState();
        const {isCartOpen,setIsCartOpen, isCheckoutOpen} = useContext(CartShopConext)
            console.log(isCartOpen)
        const toggleMenu = ()=>{
            setshowMenu(!showMenu)
        }

    return(
      <div    className="navbar">
        
        <div className="navTop"> 

            <div className="profile" >    
           <a href='/SignUp'>  <img  src={ userIcon}/> </a>
          </div>
       <div    className="Logo">
       <a href='/'>  <img  src={logo }/></a>
        </div>
     
        <div   className="Cart" onClick={()=> setIsCartOpen(!isCartOpen)}>
        <img  src={cartIcon }/>
        </div>
        
        
        </div>

     
        {/** Bottom navbar for links */}
        <div    className="navBottom">
        <div    className={ showMenu? "navLinks  ":  "navLinks  navLinkShow"} >
            <ul>
                <li> <a href='#'> New Arrivals </a></li>
                <li><a href='/brands'>  Brands</a></li>
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

        {/* For closing and opening menu*/}
        <div    className='closeOpenBtn'>

            {
                showMenu ? 
                <img className='closeMenu' src={closeBtn} onClick={toggleMenu} />     
         
                 :
                 <img className='openMenu' src={openBtn} onClick={toggleMenu} />
                
            }
  

  </div>

        </div>
        {
            isCartOpen &&<CartBag />

           
        }  
        {
            isCheckoutOpen && <CheckOut />
        }
        <Outlet></Outlet>
        </div>
    )
}


export default Navbar;