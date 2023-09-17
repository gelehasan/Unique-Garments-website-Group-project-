import { colorsNames } from "../FiltersData";

const ColorFilter = ({selectedColor,setSelectedColor})=>{

    const handleColorFiltering = (colorName)=>{ 
      if(colorName==selectedColor){
          setSelectedColor("All")
      }else{
          setSelectedColor(colorName);
      }   
    }


    return(
      <div className='bottomContainer'>
        <legend className='sectionTitle'>Colors</legend> 
        <div>
          {colorsNames.map((color) => (
            <div 
              key={color} 
              className={`BrandSelection ${selectedColor === color ? "active" : ""}`} 
              onClick={() => handleColorFiltering(color)}
              tabIndex="0"
            >
              <div style={{ backgroundColor: color }} className={`colorsIcon ${color}`}>
              </div>
              <label className='brandsLabel'>
                {color}
              </label>
            </div>
          ))}
        </div>
      </div>

    )
}

export default ColorFilter