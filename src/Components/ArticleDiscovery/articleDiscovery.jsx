import './articleDiscovery.css';


const ArticleDiscovery = ({randomArticles})=>{
    const {articlePicture}=randomArticles;
    return(
        <div className='magazineContainer'>
            <img src={articlePicture}/>
        </div>
    )
}

export default ArticleDiscovery;