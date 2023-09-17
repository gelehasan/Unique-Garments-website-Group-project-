import { useSelector } from "react-redux";
import { getCollectionData } from "../../Firebase/firebase";
import { setCatagories, setCatagoryLoadError } from "../../Store/Reducers/CatagoriesReducer.js/CatagoryAction";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Catagories from "../Categories/Categories";
import { SelectShoes } from "../../Store/Reducers/CatagoriesReducer.js/CatagorySelector";
import { fetchAndDispatchCategories } from "../../Store/Reducers/CatagoriesReducer.js/CatagoryAction";

const ShoesOverView = ()=> {
    const ShoesData = useSelector(SelectShoes);
    const dispatch = useDispatch()

    useEffect(()=>{

        fetchAndDispatchCategories(dispatch)

    },[dispatch])

    return(
        <div>

        { ShoesData.length > 0 && 
                <Catagories DataShop={ShoesData} isGarmentsFilterOn={false} isShoesFilterOn={true} isShopByFilterOn={false} />
                 }
                </div>
    )
}


export default ShoesOverView;