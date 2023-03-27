import { useState } from "react"

const Sort = ({ tempProducts, handleSort, sort }) => {
  /*   const [sort, setSort] = useState("name-a")

  let tempProducts = [...containerData]
  if (sort === "price-lowest") {
    tempProducts = containerData.sort((a, b) => {
      return a.price - b.price
    })
  } else if (sort === "price-highest") {
    tempProducts = containerData.sort((a, b) => {
      return b.price - a.price
    })
  } else if (sort === "name-a") {
    tempProducts = containerData.sort((a, b) => {
      return a.name.localeCompare(b.name)
    })
  } else if (sort === "name-z") {
    tempProducts = containerData.sort((a, b) => {
      return b.name.localeCompare(a.name)
    })
  }

  const handleSort = (e) => {
    const value = e.target.value
    setSort(value)
    console.log(value)
  }
 */
  return (
    <>
      <section className="flex flex-col  space-y-6 mt-12 justify-center items-center space-x-8 md:flex-row md:space-y-0">
        <p>{tempProducts.length} products found!</p>
        <hr className="hidden md:block w-64 bg-teal-700" />
        <form>
          <label htmlFor="sort">sort products by :</label>
          <select
            className="outline-none px-1.5 py-1 rounded-md capitalize ml-4 cursor-pointer"
            name="sort"
            id="sort"
            value={sort}
            onChange={handleSort}
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
