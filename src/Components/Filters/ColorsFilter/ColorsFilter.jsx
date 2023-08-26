
const ColorFilter = ({colors,selectedColor,handleColorFiltering})=>{

    return(

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
    )
}

export default ColorFilter