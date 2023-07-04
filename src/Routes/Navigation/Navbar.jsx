import logo from '../../Assets/logo.png';
import cartIcon from '../../Assets/shopping-cart.svg';
import userIcon from '../../Assets/user.svg';
import './nav.css';
const Navbar = ()=>{

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
                <li className='shopBY'><a href='#'> Shop By</a></li>
                <li><a href='#'> Magazine</a> </li>
            </ul>
        </div>

        </div>
        </div>
    )
}


export default Navbar;