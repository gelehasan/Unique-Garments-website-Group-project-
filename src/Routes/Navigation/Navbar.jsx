import { Outlet } from 'react-router-dom';
import './nav.css';
import { useState } from 'react';
import CartBag from '../../Components/CartBag/CartBag';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setCartVisibility } from '../../Store/Reducers/CartReducer/cartActions';
import BottomNav from '../../Components/Navbar-Components/Bottom-Nav';
import { getNumberOfItems } from '../../Store/Reducers/CartReducer/cartSelector';
import { Helmet } from 'react-helmet';
import TopNavBarSelections from '../../Components/Navbar-Components/Top-Nav';

const Navbar = () => {
  const [isShopBY, setShopBY] = useState(false);
  const [showMenu, setshowMenu] = useState();
  const [profileDropDown, setProfileDropDown] = useState(false); 
  const { currentUser } = useSelector((state) => state.user);
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);
  const numberOfItems = useSelector(getNumberOfItems);
  const dispatch = useDispatch();

  const setCart = () => {
    dispatch(setCartVisibility(!isCartOpen));
  };

  const toggleMenu = () => {
    setshowMenu(!showMenu);
  };

  return (
      <div className="navbar">
        <Helmet>
          <title>Home page</title>
          <meta name='description' content='This is the home page' /> 
        </Helmet>

        {/* Top Navigation Bar */}
        <TopNavBarSelections 
          currentUser={currentUser} 
          setProfileDropDown={setProfileDropDown} 
          profileDropDown={profileDropDown} 
          numberOfItems={numberOfItems} 
          setCart={setCart}
        />

        {/* Bottom Navigation Bar */}
        <BottomNav 
          setShopBY={setShopBY}
          toggleMenu={toggleMenu}
          isShopBY={isShopBY}
          showMenu={showMenu}
        />
        
        {/* Display Cart Bag if 'isCartOpen' is true */}
        {isCartOpen && <CartBag isCheckOutPage={false} />}

        {/* Router Outlet */}
        <Outlet />
      </div>
  );
};

export default Navbar;
