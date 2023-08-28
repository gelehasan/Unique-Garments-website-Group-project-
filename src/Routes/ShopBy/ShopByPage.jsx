import './ShopByStyling.css';
import { SelectAllCatagories } from "../../Store/Reducers/CatagoriesReducer.js/CatagorySelector";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getCollectionData } from '../../Firebase/firebase';
import { setCatagories, setCatagoryLoadError } from '../../Store/Reducers/CatagoriesReducer.js/CatagoryAction';
import { useEffect } from 'react';
import Catagories from '../../Components/Categories/Categories';
const ShopBy = ()=>{
    const ShopBYData = useSelector(SelectAllCatagories)
    const dispatch = useDispatch()

    useEffect(()=>{
        const FetchCatagories = async ()=>{
            try{
                let Data = await getCollectionData();
                dispatch(setCatagories(Data))
            }catch(error){
                dispatch(setCatagoryLoadError, error)
            }}
            FetchCatagories();
    },[])

    return(
        <div>

{ ShopBYData.length > 0 &&
        <Catagories DataShop={ShopBYData} isGarmentsFilterOn={false} isShoesFilterOn={false} isShopByFilterOn={true}/>
         }
        </div>
    )
}

export default ShopBy;
