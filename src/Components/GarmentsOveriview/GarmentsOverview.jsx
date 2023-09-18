import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setCatagories,setCatagoryLoadError } from "../../Store/Reducers/CatagoriesReducer.js/CatagoryAction";
import { useEffect } from "react";
import Catagories from "../Catagories-Component/Categories/Categories";
import { SelectGarments } from "../../Store/Reducers/CatagoriesReducer.js/CatagorySelector";
import { fetchAndDispatchCategories } from "../../Store/Reducers/CatagoriesReducer.js/CatagoryAction";


const GarmentsOverView = ()=>{
    const Catagory = useSelector(SelectGarments);
    const dispatch = useDispatch()

    useEffect(()=>{
        fetchAndDispatchCategories(dispatch)
    },[dispatch])

    return(
       <div>

        { Catagory.length > 0 && 
        <Catagories 
        DataShop={Catagory} 
        isGarmentsFilterOn={true} 
        isShoesFilterOn={false} 
        isShopByFilterOn={false}/>
         }

       </div>
    )
}


export default GarmentsOverView;