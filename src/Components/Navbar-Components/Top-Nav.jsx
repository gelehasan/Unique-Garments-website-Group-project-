import { NavLink } from "react-router-dom";
import ProfileDropDown from "../Profile-DropDown/ProfileDropDown";
import logo from '../../Assets/logo.png';
import cartIcon from '../../Assets/shopping-cart.svg';
import userIcon from '../../Assets/user.svg';
import heartIcon from "../../Assets/heart.svg";


const TopNavBarSelections = ({currentUser, setProfileDropDown, profileDropDown, numberOfItems, setCart})=>{
   
   
    return (
        <div className="navTop">

          <div className="profile">
            {profileDropDown && <ProfileDropDown />}
            <img
              src={userIcon}
              onClick={() => setProfileDropDown(!profileDropDown)}
              tabIndex="0"
              alt='Profile icon'
            />
            {currentUser ? (
              <span className='displayCurrentUser'>Hi {currentUser.displayName}</span>
            ) : (
              <span className='displayCurrentUser'>Guest </span>
            )}
          </div>

          <div className="Logo">
            <NavLink to={"/"} id="Logo-link">
              <img src={logo} alt="Logo" />
            </NavLink>
          </div>
      
          <NavLink to={"/Wishlist"} className='WishlistIcon removeBground'>
            <img src={heartIcon} />
          </NavLink>
      
          <div className="Cart">
            <span className={numberOfItems > 9 ? "numberOfItems adjustItems" : "numberOfItems"}>
              {numberOfItems}
            </span>
            <NavLink className="removeBground">
              <img src={cartIcon} onClick={setCart} alt="Cart" />
            </NavLink>
          </div>
          
        </div>
      );
}


export default TopNavBarSelections;