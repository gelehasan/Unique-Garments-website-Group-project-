import './shopBYStyle.css'
import '../../Routes/Navigation/nav.css';
import { SelectAllCatagories } from '../../Store/Reducers/CatagoriesReducer.js/CatagorySelector';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const ShopBY = ({isShopBY,setShopBY})=>{
  //When a user clicks on one of the links it will set the drop down to false
  const currentUser = useSelector((state)=> state.user.currentUser);
  const AllCataogires = useSelector(SelectAllCatagories);
  const [shopBYItems, setShopBYItems] = useState();
  const [discoverMore,setDiscoverMore] = useState();
  const Navigate = useNavigate();

    useEffect(()=>{
    if(currentUser )
    {
    const filteredItems=  AllCataogires.filter((items)=> {
      return items.occasions.toLowerCase() == currentUser.type.toLowerCase()
     })
    const shuffledItems = [...filteredItems].sort(() => 0.5 - Math.random());
      const selectedItems = shuffledItems.slice(0, 5);
     setShopBYItems(selectedItems)

    }else{
        const shuffledItems = [...AllCataogires].sort(() => 0.5 - Math.random());
        const selectedItems = shuffledItems.slice(0, 5);
        setShopBYItems(selectedItems)
    }
    },[currentUser])

    useEffect(()=>{
        const shuffledItems = [...AllCataogires].sort(() => 0.6 - Math.random());
        const selectedItems = shuffledItems.slice(0, 6);
        setDiscoverMore(selectedItems)
    },[])

  const handleNavigation = (url)=>{
    Navigate(url)
    window.location.reload()
  }
  const changeHandler = ()=>{
    setShopBY(false)
  }
  
    return(
        <div className= {isShopBY ? "shopBy dropShow " : "shopBy "}>
            <div  className="sec1">
            <h3> For you</h3>
            <div className="sec1Main">
                <ul >
                   {shopBYItems &&
                    shopBYItems.map((items)=>{
                      
                        return(
                            <li
                             key={items.id} 
                             onClick={()=> handleNavigation(`/${items.urlLink}/${items.id}`)}>
                              {items.title} 
                            </li>
                        )
                    })
                   }
                   
                </ul>
            </div>
            </div>

            <div    className="sec2">
            <h3 > Discover more</h3>
            <div className="sec2Main">
            <ul>
            {discoverMore &&
                    discoverMore.map((items)=>{
                        return(
                            
                            <li key={items.id} onClick={()=> handleNavigation(`/${items.urlLink}/${items.id}`)}>
                          
                              {items.title}
                           
                          </li>

                        )
                    })
                   }
                </ul>
                </div>
            </div>
        </div>
    )
}


export default ShopBY;