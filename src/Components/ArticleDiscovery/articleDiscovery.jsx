import './articleDiscovery.css';
import { Link } from 'react-router-dom';

const ArticleDiscovery = ({randomArticles})=>{
    let {id,articlePicture,articleTitle,introPassage}=randomArticles;
    introPassage = introPassage.split(' ').slice(0, 30).join(' ');

    return(
        <div className='articleDiscoveryContainer'>
         
          <img 
          src={articlePicture} 
          alt={`an article picture of ${articleTitle}`}
          /> 

        <div className="articleDiscoveryTtitle">
          <h4>{articleTitle}</h4>   
          <label>
    {introPassage}...
          </label>
          <Link to={`/articles/${id}`}>  
              <button className='articleDiscoveryTtitlebtn'>Read Article</button> 
              </Link>  
           </div>

        </div>
    )
}

export default ArticleDiscovery;