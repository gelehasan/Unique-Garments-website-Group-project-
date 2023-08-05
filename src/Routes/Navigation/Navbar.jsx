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
import { Link } from 'react-router-dom';
import { UserContext } from '../../Context/userContext';
const Navbar = ()=>{
        //We use usestate to determine if we show the drop down or not
        // Use state can be used to store many thing such as arrays, etcs not just boolean 
        //In this case see it as a variable with boolean expersion 
        //which changes based on the action performed
        const [isShopBY, setShopBY]= useState(false);
        const [showMenu, setshowMenu]= useState();
        const {isCartOpen,setIsCartOpen, isCheckoutOpen} = useContext(CartShopConext);
        const {currentUser}= useContext(UserContext);

       
       // let {displayName}= currentUser;
      
        const toggleMenu = ()=>{
            setshowMenu(!showMenu)
        }

    return(
      <div    className="navbar">
        
        <div className="navTop"> 

            <div className="profile"  >  
            <img  src={ userIcon}/>
         
         
     
         {currentUser? `Hi ${currentUser.displayName}` :
        <span> 
         <Link to={"/SignIn"}>  <span> Sign in/</span> </Link>
         <Link to={"/SignUp"}>  <span> Sign Up </span> </Link>
         </span>
         }
        
         
          </div>
       <div    className="Logo">
       <Link to={"/"}>  <img  src={logo }/></Link>
        </div>
     
        <div   className="Cart" onClick={()=> setIsCartOpen(!isCartOpen)}>
        <img  src={cartIcon }/>
        </div>
        
        
        </div>

     
        {/** Bottom navbar for links */}
        <div    className="navBottom">
        <div    className={ showMenu? "navLinks  ":  "navLinks  navLinkShow"} >
            <ul>
                <li > <a href='#'> New Arrivals </a></li>
                <li><Link to={"/Garments"}> Garments </Link> </li>
                <li> <Link to={"/Shoes"}> Shoes </Link></li>
                {/* When a user hovers over shop by its set to true and shows the drop down
                    When it leaves it set to false
                */}
                <li onMouseEnter={()=>setShopBY(true)}  onMouseLeave={()=> setShopBY(false)}>
                    <Link to={"/ShopBy"}> Shop By </Link>
                   { <ShopBY isShopBY={isShopBY}  setShopBY={setShopBY}/>}
                    </li>
                <li> <Link to={"/Magazine"}> Magazine</Link> </li>
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