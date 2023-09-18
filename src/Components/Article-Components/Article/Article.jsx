import { useState, useEffect } from "react";
import { getArticleData } from "../../../Firebase/firebase";
import { useParams } from "react-router-dom"
import "./Article.css"
import { fetchAndDispatchArticles } from "../../../Store/Reducers/ArticleReducer/articleActions";
import { useSelector } from "react-redux";
import { RetrieveArticleData } from "../../../Store/Reducers/ArticleReducer/articleSelector";
import { useDispatch } from "react-redux";
 const Article = ()=> {
    const {articleID} = useParams();
    const [selectedArticle, setselectedArticle] = useState();
    const articles = useSelector(RetrieveArticleData)
    const dispatch= useDispatch();

    useEffect(()=>{
        fetchAndDispatchArticles(dispatch)
    },[dispatch])
    
    useEffect(()=>{
        const FetchArticle = async ()=>{
            try{
                const findSelectedArticle= articles.find((article)=> article.id ==articleID)
                setselectedArticle(findSelectedArticle);
            }catch(error){
               
            }}
                FetchArticle();
        },[articles])
  
        
    return(
        <div>
      {  selectedArticle && 
      <div className="singleArticleView">
       
        <header className="article-header">
            
            <h1 className="article-title">{selectedArticle.articleTitle}</h1>
            <p className="article-author">{selectedArticle.author}</p>
            <p className="article-date">{selectedArticle.publishedDate}</p>
            <img src={selectedArticle.articlePicture} alt={`Article ${selectedArticle.id} image`} />
        </header>

        <article className="article-content">
            <p> {selectedArticle.introPassage}</p>

            <p>{selectedArticle.firstPassage}</p>

            <blockquote className="quote">
                <p>{selectedArticle.firstQuote}</p>
            </blockquote>

           <p>  {selectedArticle.secondPassage} </p>

            <blockquote className="quote">
                <p>{selectedArticle.secondQuote}</p>
            </blockquote>

            <p>{selectedArticle.thirdPassage}</p>            
            <blockquote className="quote">
                <p>{selectedArticle.thirdQuote}</p>
            </blockquote>
            <p>{selectedArticle.finalPassage}</p>
        </article>
    </div>
    }
   </div> 
    )
}


export default Article;