import './shopObj.css'
import comingSoon from '../../Assets/comingSoon.jpg';

const ShopBYObject = ()=>{

    return(
        <div    className=" shopByContainer">

        <div    className="shopByTitle">
          <h3> Slogan/ Titles</h3> 
            </div>

        <div    className="shopByobj">
        <img src={comingSoon} />
        </div>


        </div>
    )
}

export default ShopBYObject;