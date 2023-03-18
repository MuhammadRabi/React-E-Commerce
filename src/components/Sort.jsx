import useProductsStore from "../Features/productsStore"

const Sort = () => {
  const productsList = useProductsStore((state) => state.productsList)
  const sort = useProductsStore((state) => state.sort)
  const updateSort = useProductsStore((state) => state.updateSort)

  const handleSort = (e) => {
    const value = e.target.value
    updateSort(value)
  }

  return (
    <>
      <section className="flex flex-col  space-y-6 mt-12 justify-center items-center space-x-8 md:flex-row md:space-y-0">
        <p>{productsList.length} products found!</p>
        <hr className="hidden md:block w-64 bg-teal-700" />
        <form>
          <label htmlFor="sort">sort products by :</label>
          <select
            className="outline-none px-1.5 py-1 rounded-md capitalize ml-4 cursor-pointer"
            name="sort"
            onChange={handleSort}
            value={sort}
          >
            <option value="price-lowest">price (lowest)</option>
            <option value="price-highest">price (highest)</option>
            <option value="name-a">name (a-z)</option>
            <option value="name-z">name (z-a)</option>
          </select>
        </form>
      </section>
    </>
  )
}

export default Sort
