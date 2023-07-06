import './shopNowStyle.css';

const ShopNow= ({items})=>{

    return(
        <div    className='shopNowItems'>
            {
                items.map((item)=>{
                    const {title, imageUrl}= item;
                    return( 
                    <div className='ItemsContainer'>
                    <div className="shopImage">
                       <img src={imageUrl}  /> 
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