import { useState, useEffect } from "react";
import { getArticleData } from "../../../Firebase/firebase";
import { useParams } from "react-router-dom"
 const Article = ()=> {
    const {articleID} = useParams();
    const [selectedArticle, setselectedArticle] = useState();


    return(
        <div>
      { /* selectedArticle && <div class="article">
        <header class="article-header">
            
            <h1 class="article-title">{articleTitle}</h1>
            <p class="article-author">{author}</p>
            <p class="article-date">{publishedDate}</p>
            <img src={articlePicture} />
        </header>

        <article class="article-content">
            <p> {introPassage}</p>

            <p>{firstPassage}</p>

            <blockquote class="quote">
                <p>{firstQuote}</p>
            </blockquote>

           <p>  {secondPassage} </p>

            <blockquote class="quote">
                <p>{secondQuote}</p>
            </blockquote>

            <p>{thirdPassage}</p>            
            <blockquote class="quote">
                <p>{thirdQuote}</p>
            </blockquote>
            <p>{finalPassage}</p>
        </article>
    </div>
    */ }
   </div> 
    )
}


export default Article;