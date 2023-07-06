import ShopNow from "../ShopNow/shopNow";
import './releaseStyle.css';
const items = [
    {
        id:1,
        title:'Title',
        imageUrl:"https://images.unsplash.com/photo-1499244571948-7ccddb3583f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
    },
    {
        id:2,
        title:'Title',
        imageUrl:"https://images.unsplash.com/photo-1499244571948-7ccddb3583f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
    },
    {
        id:3,
        title:'Title',
        imageUrl:"https://images.unsplash.com/photo-1499244571948-7ccddb3583f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
    }
]

const NewRelease = ()=>{

    return(
        <div    className="shopNowContainer">
     <div    className="shopNowTitle">Title/Desription</div>
            <div className="shopNowsubTitle">Shop now</div>
       
              
          <ShopNow items={items} />
    
        </div>
    )
}


export default NewRelease;