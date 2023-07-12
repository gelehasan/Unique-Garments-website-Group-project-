const FilterOptions = ()=>{
    return(
        <div>
     <h2>Filter Options</h2>
    <label for="color-filter">Color:</label>
    <select id="color-filter">
      <option value="">All</option>
      <option value="white">white</option>
      <option value="black">black</option>
      <option value="green">Green</option>
    </select>
  
    <label for="price-filter">Price:</label>
    <select id="price-filter">
      <option value="">All</option>
      <option value="budget">Budget</option>
      <option value="mid-range">Mid-Range</option>
      <option value="luxury">Luxury</option>
    </select>
  
    <label for="category-filter">Category:</label>
    <select id="category-filter">
      <option value="">All</option>
      <option value="tote">Tote</option>
      <option value="shoulder">Shoulder</option>
      <option value="crossbody">Crossbody</option>
    </select>
        </div>
    )
}
export default FilterOptions;