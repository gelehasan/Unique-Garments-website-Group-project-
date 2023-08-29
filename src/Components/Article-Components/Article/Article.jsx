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
        console.log(selectedArticle)
        
    return(
        <div>
      {  selectedArticle && <div class="article">
       
        <header class="article-header">
            
            <h1 class="article-title">{selectedArticle.articleTitle}</h1>
            <p class="article-author">{selectedArticle.author}</p>
            <p class="article-date">{selectedArticle.publishedDate}</p>
            <img src={selectedArticle.articlePicture} />
        </header>

        <article class="article-content">
            <p> {selectedArticle.introPassage}</p>

            <p>{selectedArticle.firstPassage}</p>

            <blockquote class="quote">
                <p>{selectedArticle.firstQuote}</p>
            </blockquote>

           <p>  {selectedArticle.secondPassage} </p>

            <blockquote class="quote">
                <p>{selectedArticle.secondQuote}</p>
            </blockquote>

            <p>{selectedArticle.thirdPassage}</p>            
            <blockquote class="quote">
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