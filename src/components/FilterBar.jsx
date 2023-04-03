import SearchBar from "./UI/SearchBar";

const FilterBar = ({ selectedCategoryItem, setSelectedCategoryItem }) => {
  const onCategoryChange = (item) => {
    setSelectedCategoryItem([...selectedCategoryItem, item]);
  };

  return (
    <div className="p-4 border-2 rounded-md h-96 border-zinc-200">
      <h2 className="text-center">Filter</h2>
      <div className="flex flex-col space-y-4">
        <SearchBar />
        <article>
          <h3>select category:</h3>
          <div>
            <input
              type="checkbox"
              id="office"
              name="category"
              value="office"
              onChange={() => onCategoryChange("office")}
            />
            <label htmlFor="category">office</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="living room"
              name="category"
              value="living room"
              onChange={() => onCategoryChange("living room")}
            />
            <label htmlFor="category">living room</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="kitchen"
              name="category"
              value="kitchen"
              onChange={() => onCategoryChange("kitchen")}
            />
            <label htmlFor="category">kitchen</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="bedroom"
              name="category"
              value="bedroom"
              onChange={() => onCategoryChange("bedroom")}
            />
            <label htmlFor="category">bedroom</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="dining"
              name="category"
              value="dining"
              onChange={() => onCategoryChange("dining")}
            />
            <label htmlFor="category">dining</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="kids"
              name="category"
              value="kids"
              onChange={() => onCategoryChange("kids")}
            />
            <label htmlFor="category">kids</label>
          </div>
        </article>
        <article>
          <label htmlFor="company">select company:</label>
          <select name="company" id="brand" className="outline-none">
            <option value="caressa">caressa </option>
            <option value="liddy">liddy </option>
            <option value="ikea">ikea</option>
            <option value="marcos">marcos</option>
          </select>
        </article>
        <section>
          <label htmlFor="price">Price</label>
          <input type="range" max="" min="" />
        </section>
      </div>
    </div>
  );
};
export default FilterBar;
