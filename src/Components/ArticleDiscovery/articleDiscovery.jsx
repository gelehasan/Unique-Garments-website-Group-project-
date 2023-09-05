import './articleDiscovery.css';
import { Link } from 'react-router-dom';

const ArticleDiscovery = ({randomArticles})=>{
    const {id,articlePicture}=randomArticles;
    return(
        <div className='magazineContainer'>
          <Link to={`/articles/${id}`}>  <img src={articlePicture}/></Link> 
        </div>
    )
}

export default ArticleDiscovery;