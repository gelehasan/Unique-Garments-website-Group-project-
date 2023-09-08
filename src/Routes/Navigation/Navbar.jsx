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
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setCartVisibility } from '../../Store/Reducers/CartReducer/cartActions';
import heartIcon from "../../Assets/heart.svg";
import { NavLink } from 'react-router-dom'; // Import NavLink from React Router
import ProfileDropDown from '../../Components/Profile/ProfileDropDown';

//please review if they are used or not
import { useContext } from 'react';
import { CartShopConext } from '../../Context/cartShopContext';
import { UserContext } from '../../Context/userContext';

const Navbar = () => {
        //We use usestate to determine if we show the drop down or not
        //Use state can be used to store many thing such as arrays, etcs not just boolean 
        //In this case see it as a variable with boolean expersion 
        //which changes based on the action performed
  const [isShopBY, setShopBY] = useState(false);
  const [showMenu, setshowMenu] = useState();
//const {isCartOpen,setIsCartOpen, isCheckoutOpen} = useContext(CartShopConext);
  const [profileDropDown, setProfileDropDown] = useState(false);
  
  const { currentUser } = useSelector((state) => state.user);
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);

  const dispatch = useDispatch();

  const setCart = () => {
    dispatch(setCartVisibility(!isCartOpen));
  };

  const toggleMenu = () => {
    setshowMenu(!showMenu);
  };

  return (
    <div className="navbar">
      <div className="navTop">
        <div className="profile">
          {profileDropDown && <ProfileDropDown />}
          <img src={userIcon} onClick={() => setProfileDropDown(!profileDropDown)} />
          {currentUser ? (
            <span className='displayCurrentUser'>Hi {currentUser.displayName}</span>
          ) : (
            "Guest"
          )}
        </div>
        <div className="Logo">
          <NavLink to={"/"} id="Logo-link"><img src={logo} alt="Logo" /></NavLink>
        </div>
        <div className="Cart">
          <NavLink to={"/Wishlist"}><img className='WishlistIcon' src={heartIcon} alt="Wishlist" /></NavLink>
          <img src={cartIcon} onClick={setCart} alt="Cart" />
        </div>
      </div>
        {/** Bottom navbar for links */}
      <div className="navBottom">
        <div className={showMenu ? "navLinks" : "navLinks navLinkShow"}>
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="active-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/Garments" activeClassName="active-link">
                Garments
              </NavLink>
            </li>
            <li>
              <NavLink to="/Shoes" activeClassName="active-link">
                Shoes
              </NavLink>
            </li>
            {/* When a user hovers over shop by its set to true and shows the drop down
                When it leaves it set to false
            */}
            <li
              onMouseEnter={() => setShopBY(true)}
              onMouseLeave={() => setShopBY(false)}
            >
              <NavLink to="/ShopBy" activeClassName="active-link">
                Shop By
              </NavLink>
              {isShopBY && <ShopBY isShopBY={isShopBY} setShopBY={setShopBY} />}
            </li>
            <li>
              <NavLink to="/Articles" activeClassName="active-link">
                Magazine
              </NavLink>
            </li>
          </ul>
        </div>
        {/* For closing and opening menu*/}
        <div className='closeOpenBtn'>
          {showMenu ? (
            <img className='closeMenu' src={closeBtn} onClick={toggleMenu} alt="Close Menu" />
          ) : (
            <img className='openMenu' src={openBtn} onClick={toggleMenu} alt="Open Menu" />
          )}
        </div>
      </div>
      {isCartOpen && <CartBag isCheckOutPage={false} />}
      <Outlet />
    </div>
  );
};

export default Navbar;
