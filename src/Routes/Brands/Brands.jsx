import './BrandsStyling.css';
import Catagories from '../../Components/Categories/Categories';
import DataShop from '../../data';
const Brands = ()=>{

    return(
        <div>
            <Catagories DataShop={DataShop}/>
        </div>
    )
}

export default Brands;