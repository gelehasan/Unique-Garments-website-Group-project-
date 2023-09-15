import { Routes, Route } from 'react-router-dom';
import ArticleOverView from '../../Components/Article-Components/Article-Overview/articleOverview';
import Article from '../../Components/Article-Components/Article/Article';
import { Helmet } from 'react-helmet';
const Articles= ()=>{

    return(
        <>
        <Helmet>
        <title>Article page</title>
        <meta name='description' content='This is the article page it shows overview of all articles you can read' /> 
      </Helmet> 
   <Routes>
    <Route path='/' element={  <ArticleOverView />}> </Route>
    <Route path=':articleID' element={  <Article />}> </Route>
   </Routes>
   </>
    )
}

export default Articles;