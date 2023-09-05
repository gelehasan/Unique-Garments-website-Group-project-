import Discovery from "../../Components/MainPageDiscovery/discovery"
import ForYouItems from "../../Components/ForYouItems/forYouItems"
import ArticleDiscovery from "../../Components/ArticleDiscovery/articleDiscovery"
import Discount from "../../Components/Discounts/discount"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { SelectAllCatagories } from "../../Store/Reducers/CatagoriesReducer.js/CatagorySelector"
import { getArticleData } from "../../Firebase/firebase"

const HomePage = ()=>{
    const currentUser= useSelector((state)=> state.user.currentUser);
    const AllCataogires = useSelector(SelectAllCatagories)
    const [forYouItems, setForYouItems] = useState();
    const [randomArticles, setRandomArticles] = useState();
    const [latestRelease, setLatestRelease] = useState();
    useEffect(()=>{

      const allItems = [...AllCataogires];
      const sortedAllItems = allItems.sort(
        (a, b) => new Date(b.addedDate) - new Date(a.addedDate)
      );
      const latest3Items = sortedAllItems.slice(0, 3);
      
      setLatestRelease(latest3Items);


      if(currentUser){
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
    },[currentUser, AllCataogires])

   useEffect(()=>{
        const FetchArticle = async ()=>{
            try{
              if(!randomArticles){ 
                let ArticlesData = await getArticleData();
                setRandomArticles(ArticlesData[Math.floor(Math.random() * 10)]);
              }
            }catch(error){
          
            }}
                FetchArticle();
        },[])

  
       
        

    return(
     <div> 
        <Discovery/>
        <ForYouItems contentTitle={"Items for you"} forYouItems={forYouItems}/>
       {randomArticles&& <ArticleDiscovery randomArticles={randomArticles}/>} 
       {latestRelease &&  <Discount contentTitle={"Latest release"} latestRelease={latestRelease}/>}
        </div>  
      
    )
}

export default HomePage;