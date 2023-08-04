import './GarmentsStyling.css';
import { useEffect, useState } from 'react';
const brandNames = ["Adidas", "Balenciaga", "Converse", "J.Crew", "Nike", "Off-white", "Rick Owens"];
const colors = ["white", "black", "purple","blue"];

const Garments = ()=>{
    const [selectedBrand, setSelectedBrand] = useState(["All"]);
    const [selectedColor, setSelectedColor]= useState(["All"]);
  
 
    const handleBrandChange = (brand) => {
        if(brand==selectedBrand){
            setSelectedBrand("")
        }else{
            setSelectedBrand(brand);
        }
      };
      const handleColorFiltering = (colorName)=>{ 
        if(colorName==selectedColor){
            setSelectedColor("All")
        }else{
            setSelectedColor(colorName);
        }   
      }

      
    
   

    return(
        <div>

      <div className='bottomContainer'>
   
        <label className='BrandTitle'> Brands</label> 
           
      
       
       <div>  {brandNames.map((brand) => (
          <div key={brand} className='BrandSelection'>
           
            <label className='brandsLabel'>
              <input
               type='checkbox'
                name='brand'
                value={brand}
                checked={selectedBrand === brand}
                onChange={() => handleBrandChange(brand)}   
              />
              {brand}
            </label>
          </div>
        ))}
        </div>
      </div>

      <div className='bottomContainer'>
   
        <label className='BrandTitle'> Colors</label> 
       <div>  {colors.map((color) => (
          <div key={color} className={`BrandSelection ${ selectedColor == color ? "active": ""}`} 
          onClick={()=>handleColorFiltering(color)}>
           <div style={{ backgroundColor: color }} className={`colorsIcon ${color}`
       }> </div>
            <label className='brandsLabel'>
              {color}
            </label>
          </div>
        ))}
        </div>
      </div>


<br/>

<br/>

<br/>



      

         
        
      </div>
    )
}

export default Garments;