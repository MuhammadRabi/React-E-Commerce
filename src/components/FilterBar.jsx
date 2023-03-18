import SearchBar from "./UI/SearchBar"

const FilterBar = () => {
  return (
    <div className="h-96 border-2 border-zinc-200 p-4 rounded-md">
      <h2 className="text-center">Filter</h2>
      <div className="flex flex-col space-y-4">
        <SearchBar />
        <section>
          <h3>category</h3>
          <p>brand 1</p>
          <p>brand 1</p>
          <p>brand 1</p>
          <p>brand 1</p>
        </section>
        <section>
          <h3>brand</h3>
          <select name="brand" id="brand" className="outline-none">
            <option value="">one </option>
            <option value="">two </option>
            <option value="">three</option>
          </select>
        </section>
        <section>
          <label htmlFor="price">Price</label>
          <input type="range" max="" min="" />
        </section>
      </div>
    </div>
  )
}
export default FilterBar
