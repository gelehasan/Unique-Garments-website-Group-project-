import './GarmentsStyling.css';
import { useEffect, useState } from 'react';
const brandNames = ["Adidas", "Balenciaga", "Converse", "J.Crew", "Nike", "Off-white", "Rick Owens"];
const colors = ["white", "black", "purple","blue"];
const accessoriesNames=["Hats","Sunglass", "Belts","Socks"];
const Bags = ["BackPacks", "Fanny","Packs", "Briefcases"];
const Clothing = ["T-shirts", "shirts", "Outerwears", "Trousers", "Jeans", "Shorts"];
const Garments = ()=>{
    const [selectedBrand, setSelectedBrand] = useState(["All"]);
    const [selectedColor, setSelectedColor]= useState(["All"]);
    const [selectedCatagory, setselectedCatagory] = useState("All")
    const [selectedOccasion, SetselectedOccasion ] = useState("All");
    const handleCatagory= (catagoryName)=>{
      if(catagoryName==selectedCatagory){
        setselectedCatagory("All");
      }else{
        setselectedCatagory(catagoryName)
      }

      
    }
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
<div className='topContainer'> 
<div className='topSub'>
   
   <label className='BrandTitle topTitles'> Accessories</label> 
    <div className='BrandSelection catagoriesSelection'>
      <ul>
        <li>View All</li>
      {accessoriesNames.map((itemName)=>{
      return(<li key={itemName} onClick={()=> handleCatagory(itemName)}
      className={`${ selectedCatagory == itemName ? "selectedCatagory": ""}`}
      > {itemName}</li>) 
      }
      )

      }

      </ul>
    </div>
   </div>

   <div className='topSub'>
   
   <label className='BrandTitle topTitles'> Bags</label> 
    <div className='BrandSelection catagoriesSelection'>
      <ul>
        <li>View All</li>
      {Bags.map((itemName)=>{
      return(<li key={itemName} onClick={()=> handleCatagory(itemName)}
      className={`${ selectedCatagory == itemName ? "selectedCatagory": ""}`}
      > {itemName}</li>) 
      }
      )

      }

      </ul>
    </div>
   </div>

   <div className='topSub'>
   
   <label className='BrandTitle topTitles'> Clothing</label> 
    <div className='BrandSelection catagoriesSelection'>
      <ul>
        <li>View All</li>
      {Clothing.map((itemName)=>{
      return(<li key={itemName} onClick={()=> handleCatagory(itemName)}
      className={`${ selectedCatagory == itemName ? "selectedCatagory": ""}`}
      > {itemName}</li>) 
      }
      )

      }

      </ul>
    </div>
   </div>
   </div>


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