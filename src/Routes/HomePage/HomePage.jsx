import Discovery from "../../Components/HomePage-Componts/MainPageDiscovery/discovery"
import ForYouItems from "../../Components/HomePage-Componts/ForYouItems/forYouItems"
import ArticleDiscovery from "../../Components/HomePage-Componts/ArticleDiscovery/articleDiscovery"
import LatestRelease from "../../Components/HomePage-Componts/newRelease/newRelease"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { SelectAllCatagories } from "../../Store/Reducers/CatagoriesReducer.js/CatagorySelector"
import {fetchAndDispatchArticles } from "../../Store/Reducers/ArticleReducer/articleActions"
import { RetrieveArticleData } from "../../Store/Reducers/ArticleReducer/articleSelector"
import { fetchAndDispatchCategories } from "../../Store/Reducers/CatagoriesReducer.js/CatagoryAction"
const HomePage = ()=>{
    const currentUser= useSelector((state)=> state.user.currentUser);
    const AllCataogires = useSelector(SelectAllCatagories)
    const AllArticleData = useSelector(RetrieveArticleData)
    const [forYouItems, setForYouItems] = useState();
    const [randomArticles, setRandomArticles] = useState();
    const [latestRelease, setLatestRelease] = useState(); 
    const dispatch=useDispatch();

  const showLatestRelease= () =>{
      const allItems = [...AllCataogires]; 
      const sortedAllItems = allItems.slice().sort((a, b) => {
      const dateA = new Date(a.addedDate);
      const dateB = new Date(b.addedDate);
      return dateB - dateA; 
      });
  
      const latest3Items = sortedAllItems.slice(0, 3);
      
      setLatestRelease(latest3Items);
  }

  const showForYouItems = ()=>{

  if(currentUser && currentUser.type){
      const filteredItems=  AllCataogires.filter((items)=> {
      return items.occasions.toLowerCase() == currentUser.type.toLowerCase()
      })
      const shuffledItems = [...filteredItems].sort(() => 0.3 - Math.random());
      const selectedItems = shuffledItems.slice(0, 3);
      setForYouItems(selectedItems)
  }else{
      const shuffledItems = [...AllCataogires].sort(() => 0.3 - Math.random());
      const selectedItems = shuffledItems.slice(0, 3);
      setForYouItems(selectedItems)
  }
  }
      
    useEffect(()=>{ 
      fetchAndDispatchArticles(dispatch)
      fetchAndDispatchCategories(dispatch)
    },[dispatch])
    
    useEffect(()=>{
      showLatestRelease()
      showForYouItems()
    },[currentUser, AllCataogires])

   useEffect(()=>{
      if(!randomArticles){ 
     setRandomArticles(AllArticleData[Math.floor(Math.random() * 10)]); }
    },[AllArticleData])
        

    return(
     <div> 
        <Discovery/>
        <ForYouItems contentTitle={"Items for you"} forYouItems={forYouItems}/>
       {randomArticles&& <ArticleDiscovery randomArticles={randomArticles}/>} 
       {latestRelease &&  <LatestRelease contentTitle={"Latest release"} latestRelease={latestRelease}/>}
        </div>  
      
    )
}

export default HomePage;