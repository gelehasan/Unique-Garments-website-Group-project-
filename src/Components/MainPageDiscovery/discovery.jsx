import './discoveryStyle.css'
import comingSoon from '../../Assets/comingSoon.jpg';
import { Link } from 'react-router-dom';
const Discovery = ()=>{

    return(
        <div    className=" shopByContainer">

        <div    className="shopByTitle">
          <h3> A journey of styles discovery starts here!</h3> 
        </div>

        <div    className="shopByobj">
        <img src={"https://res.cloudinary.com/ddeif6hmk/image/upload/v1693861908/research-jpg-data_1_koqfar.png"} />
        </div>

        <div className='discoveryContainer'>
        <h3>  Craft Your Signature Style- Where Timeless Meets Contemporary
        </h3>
       <div className='discoverbtn'> 
       <Link to={"/ShopBy"}> 
       <button >SHOP NOW</button>
       </Link>
       </div>
        </div>


        </div>
    )
}

export default Discovery;