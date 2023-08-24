import "./articlesStyling.css";
import { getArticleData } from "../../../Firebase/firebase";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const ArticleOverView = ()=>{
    const [articles, setArticles] = useState();

   useEffect(()=>{
    const FetchArticle = async ()=>{
        try{
            let ArticlesData = await getArticleData();
            setArticles(ArticlesData);
        }catch(error){
           
        }}
            FetchArticle();
    },[articles])


    return(
        <div className='articleContainer'>


        <h1>Explore our featured articles</h1>
        <div className="articles-list">
            <div className="article">
                <img src="https://res.cloudinary.com/ddeif6hmk/image/upload/v1692798128/articleimg1_qyd3ya.jpg" alt="Article 1 Image" />
                <h2 className="article-title">Is It Actually OK To Be Single?</h2>
                <p className="article-author">Mr Tom M Ford</p>
            </div>
            <div className="article-row">
                <div className="scroll-container">

                    { articles&&
                        articles.map((article)=> {
                            const {id,articlePicture, articleTitle, author}= article;

                          return( 
                         <div className="article">
                            <Link className="Links" to={`/articles/${id}`}> 
                            <img src={articlePicture} alt="Article 1 Image" />
                            <h2 className="article-title">{articleTitle}</h2>
                            <p className="article-author">{author}</p>
                            </Link>
                        </div>
                  
                          )

                        })
                        
                    }
                         </div>
                  
            </div>
        </div>
    
    
            </div>
    )
}


export default ArticleOverView;