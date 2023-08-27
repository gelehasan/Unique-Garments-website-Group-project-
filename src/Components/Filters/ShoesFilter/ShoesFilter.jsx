

const ShoesFilter = ({shoesNames,handleCatagory,selectedCatagory})=>{

    return(
        <div className='topSub'>

        <label className='BrandTitle topTitles'> Shoes Catagory</label> 
        <div className='BrandSelection catagoriesSelection'>
          <ul>
    
          {shoesNames.map((itemName)=>{
          return(<li key={itemName} onClick={()=> handleCatagory(itemName)}
        
          className={`${ selectedCatagory == itemName ? "selectedCatagory": ""}`}
          > {itemName}</li>) 
          }
          )
          }
          </ul>
        </div>
        </div>
    )
}

export default ShoesFilter;
