import { NavLink } from "react-router-dom"
import closeBtn from '../../Assets/xmark.svg';
import openBtn from '../../Assets/menu.svg';
import ShopBYDropDown from "../ShopBY-Drop-Down/shopBY";

const BottomNav = ({setShopBY,showMenu, isShopBY,toggleMenu})=>{

    return(
        <div className="navBottom">
        <div className={showMenu ? "navLinks" : "navLinks navLinkShow"}>
          <ul>
            <li>
              <NavLink  to="/" className="active-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/Garments" className="active-link">
                Garments
              </NavLink>
            </li>
            <li>
              <NavLink to="/Shoes" className="active-link">
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
              <NavLink to="/ShopBy" className="active-link">
                Shop By
              </NavLink>
              {isShopBY && <ShopBYDropDown isShopBY={isShopBY} setShopBY={setShopBY} />}
            </li>
            <li>
              <NavLink to="/Articles" className="active-link">
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
    )
}

export default BottomNav;