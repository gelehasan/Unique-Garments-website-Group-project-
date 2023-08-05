import './GarmentsStyling.css';
import Catagories from '../../Components/Categories/Categories';
import DataShop from '../../data';
const Garments = ()=>{

  
  
    
    return(
       <div>
  <Catagories DataShop={DataShop}/>
       </div>
    )
}

export default Garments;