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

import { useContext } from 'react';
import { CartShopConext } from '../../Context/cartShopContext';
import { UserContext } from '../../Context/userContext';

const Navbar = () => {
  const [isShopBY, setShopBY] = useState(false);
  const [showMenu, setshowMenu] = useState();
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
            ""
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
