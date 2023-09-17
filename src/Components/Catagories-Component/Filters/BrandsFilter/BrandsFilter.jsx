import { brandNames } from "../FiltersData";

const BrandsFilter = ({selectedBrand, setSelectedBrand })=>{
  
    const handleBrandChange = (brand) => {
      if(brand==selectedBrand){
          setSelectedBrand("All")
      }else{
          setSelectedBrand(brand);
      }
    };

    return(
      <div className='bottomContainer'>
        <legend className='sectionTitle'>Brands</legend> 
        <div>
          {brandNames.map((brand) => (
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
    )
}


export default BrandsFilter;