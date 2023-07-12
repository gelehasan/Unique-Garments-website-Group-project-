import './Products.css';
const Product = ({item})=>{
    const { name, Price, ImageUrl} = item;
    return(
        <div    className="productItem">
            <div    className="divImage">
            <img className='productImage' src={ImageUrl} />
            </div>
            <div className="description">
                <span>{name}</span>
                <span>{Price}</span>
            </div>
        </div>
    )
}
export default Product;