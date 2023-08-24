import { Routes, Route } from 'react-router-dom';
import ArticleOverView from '../../Components/Article-Components/Article-Overview/articleOverview';
import Article from '../../Components/Article-Components/Article/Article';
const Articles= ()=>{

    return(
   <Routes>
    <Route path='/' element={  <ArticleOverView />}> </Route>
    <Route path=':articleID' element={  <Article />}> </Route>
   </Routes>
    
    )
}

export default Articles;