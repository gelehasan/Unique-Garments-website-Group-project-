import './ShopByStyling.css';
import { SelectAllCatagories } from "../../Store/Reducers/CatagoriesReducer.js/CatagorySelector";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getCollectionData } from '../../Firebase/firebase';
import { setCatagories, setCatagoryLoadError } from '../../Store/Reducers/CatagoriesReducer.js/CatagoryAction';
import { useEffect } from 'react';
import Catagories from '../../Components/Categories/Categories';
import { fetchAndDispatchCategories } from '../../Store/Reducers/CatagoriesReducer.js/CatagoryAction';
import { Helmet } from 'react-helmet';
const ShopBy = ()=>{
    const ShopBYData = useSelector(SelectAllCatagories)
    const dispatch = useDispatch()

    useEffect(()=>{

        fetchAndDispatchCategories(dispatch)

    },[dispatch])

    return(
        <div>
       <Helmet>
        <title>Shop by page</title>
        <meta name='description' content='This is the shob by page, you can filter items by occassion ' /> 
      </Helmet>
{ ShopBYData.length > 0 &&
        <Catagories DataShop={ShopBYData} isGarmentsFilterOn={false} isShoesFilterOn={false} isShopByFilterOn={true}/>
         }
        </div>
    )
}

export default ShopBy;
