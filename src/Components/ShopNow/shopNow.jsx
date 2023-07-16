import './shopNowStyle.css';

const ShopNow= ({items})=>{

    return(
        <div    className='shopNowItems'>
            {
                items.map((item,index)=>{
                    const {title, imageUrl}= item;
                    return( 
                    <div className='ItemsContainer' key={index}>
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