import ShopNow from '../ShopNow/shopNow';
import './forYouStyle.css';

const ForYouItems = ({contentTitle, forYouItems})=>{


    return (
        <div className="shopNowContainer">
          <div className="shopNowTitle">{contentTitle}</div>
          <div className="shopNowsubTitle">Shop now</div>
          
          {forYouItems && <ShopNow items={forYouItems} />}
        </div>
      );
      
}


export default ForYouItems;