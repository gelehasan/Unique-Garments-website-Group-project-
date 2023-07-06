import './shopBYStyle.css'
import '../../Routes/Navigation/nav.css';

const ShopBY = ({isShopBY,setShopBY})=>{
  console.log(isShopBY)

  //When a user clicks on one of the links it will set the drop down to false
  const changeHandler = ()=>{
    setShopBY(false)
  }
  console.log(isShopBY)
    return(
        <div className= {isShopBY ? "shopBy dropShow " : "shopBy "}>
            <div  className="sec1">
            <h3> For you</h3>
            <div className="sec1Main">
                <ul >
                    <li onClick={changeHandler}>Example</li>
                    <li onClick={changeHandler}>Example</li>
                    <li onClick={changeHandler}>Example</li>
                    <li onClick={changeHandler}>Example</li>
                    <li onClick={changeHandler}>Example</li>
                   
                </ul>
            </div>
            </div>

            <div    className="sec2">
            <h3 > Discover more</h3>
            <div className="sec2Main">
            <ul>
                    <li onClick={changeHandler} >Example</li>
                    <li onClick={changeHandler}>Example</li>
                    <li onClick={changeHandler}>Example</li>
                    <li onClick={changeHandler}>Example</li>
                    <li onClick={changeHandler}>Example</li>
                   
                </ul>
                </div>
            </div>
        </div>
    )
}


export default ShopBY;