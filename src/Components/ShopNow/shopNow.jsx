import './shopNowStyle.css';
import { Link } from 'react-router-dom';
const ShopNow= ({items})=>{

    return(
        <div    className='shopNowItems'>
            {
                items.map((item,index)=>{
                    const {id,urlLink,title, image}= item;
                    return( 
                    <div className='ItemsContainer' key={index}>
                    <div className="shopImage">
                    <Link to={`/${urlLink}/${id}`}>    <img src={image} alt={`an image of ${title}`} /> 
                    </Link>  
                    </div>
                    <div className="shopTitle">
                     <h4>{title}</h4>   
                     
                     </div>

                     </div>
                     )

                })
            }
        </div>
    )
}

export default ShopNow;