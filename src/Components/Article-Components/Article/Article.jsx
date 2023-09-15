import { useState, useEffect } from "react";
import { getArticleData } from "../../../Firebase/firebase";
import { useParams } from "react-router-dom"
import "./Article.css"
 const Article = ()=> {
    const {articleID} = useParams();
    const [selectedArticle, setselectedArticle] = useState();

    useEffect(()=>{
        const FetchArticle = async ()=>{
            try{
                let ArticlesData = await getArticleData();
                //Array starts at 0 and our article id starts with 1, 
                //there fore we subtract 1 to display the correct data
                setselectedArticle(ArticlesData[articleID-1]);
            }catch(error){
               
            }}
                FetchArticle();
        },[])
  
        
    return(
        <div>
      {  selectedArticle && <div className="article">
       
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