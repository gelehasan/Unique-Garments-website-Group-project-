import "./articlesStyling.css";
import { getArticleData } from "../../../Firebase/firebase";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchAndDispatchArticles } from "../../../Store/Reducers/ArticleReducer/articleActions";
import {  RetrieveArticleData } from "../../../Store/Reducers/ArticleReducer/articleSelector";
import { useSelector } from "react-redux";

const ArticleOverView = ()=>{
  
    const articles = useSelector(RetrieveArticleData)
    const dispatch= useDispatch();

    useEffect(()=>{
        fetchAndDispatchArticles(dispatch)
    },[dispatch])


    return(
        <div className='articleContainer'>


        <h1>Explore our featured articles</h1>
        <div className="articles-list">
            <div className="articleContents">
               <Link to={`/articles/${1}`}>  
               <img src="https://images.unsplash.com/photo-1584953165719-3813269c9bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" 
                alt="Our featured article image, click to read it" />
                </Link>
                <h2 className="article-title">Is It Actually OK To Be Single?</h2>
                <p className="article-author">Mr Tom M Ford</p>
            </div>
            <div className="article-row">
                <div className="scroll-container">

                    { articles&&
                        articles.map((article)=> {
                            const {id,articlePicture, articleTitle, author}= article;

                          return( 
                         <div className="article" key={id}>
                            <Link className="Links" to={`/articles/${id}`}> 
                            <img src={articlePicture} alt={`Article ${id} image`} />
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