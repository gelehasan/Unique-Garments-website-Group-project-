import './GarmentsStyling.css';
import Catagories from '../../Components/Categories/Categories';
import DataShop from '../../data';
import DisplayItem from '../../Components/DisplayItem/DisplayItem';
const Garments = ()=>{  
    return(
       <div>
  <Catagories DataShop={DataShop}/>
       </div>
    )
}

export default Garments;