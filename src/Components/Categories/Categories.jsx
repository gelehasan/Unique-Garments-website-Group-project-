import Product from "../Products/product";
import FilterOptions from "../ProductFilters/productFilters";
import './Categories.css';
const Catagories = ()=>{
    return(
        <div    className="catagories">
        <FilterOptions />
        <div    className="catagoriesContent">
            {
                DataShop.map((item)=>{
                  return(  <Product  keys={item.id} item={item} />
                  )
                })
            }
   </div>
        </div>
    )
}
export default Catagories;