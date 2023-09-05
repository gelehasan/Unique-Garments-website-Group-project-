import Discovery from "../../Components/MainPageDiscovery/discovery"
import ForYouItems from "../../Components/ForYouItems/forYouItems"
import Magazine from "../../Components/ArticleDiscovery/articleDiscovery"
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
    useEffect(()=>{
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
    },[currentUser])

  /*  useEffect(()=>{
        const FetchArticle = async ()=>{
            try{
                let ArticlesData = await getArticleData();
        
                setRandomArticles(ArticlesData[Math.floor(Math.random() * 10)]);
            }catch(error){
          
            }}
                FetchArticle();
        },[])
*/
        console.log(randomArticles)
       
        

    return(
     <div> 
        <Discovery/>
        <ForYouItems contentTitle={"Items for you"} forYouItems={forYouItems}/>
        <Magazine />
        <Discount />
        </div>  
      
    )
}

export default HomePage;