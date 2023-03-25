import { useEffect, useState } from "react"
import FilterBar from "../components/FilterBar"
import ProductsContainer from "../components/product/ProductsContainer"
import Sort from "../components/Sort"
import productStore from "../Features/productStore"

const ProductsPage = () => {
  const productsList = productStore((state) => state.productsList)
  const [containerData, setcontainerData] = useState(productsList)
  const [selectedCategoryItem, setSelectedCategoryItem] = useState([])
  const [sort, setSort] = useState("name-a")
  /*   const [selectedCompanyItem, setSelectedCompanyItem] = useState([])
   */
  // filter function
  const categoryFilter = () => {
    let results = [...productsList]
    let filteredCategoryResult
    if (selectedCategoryItem) {
      filteredCategoryResult = results.filter((item) => {
        if (selectedCategoryItem.includes(item.category)) {
          return item
        }
        return null
      })
      setcontainerData(filteredCategoryResult)
    }
  }

  //const companyFilter = () => {}

  useEffect(() => {
    if (selectedCategoryItem.length > 0) {
      categoryFilter()
    }
  }, [selectedCategoryItem])

  // sorting

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
  }

  return (
    <>
      <Sort handleSort={handleSort} tempProducts={tempProducts} sort={sort} />
      <div className="grid gap-12 sm:grid-cols-[200px,1fr]">
        <FilterBar
          /*  selectedCompanyItem={selectedCompanyItem}
          setSelectedCompanyItem={setSelectedCompanyItem} 
          clearFilters={clearFilters}*/
          selectedCategoryItem={selectedCategoryItem}
          setSelectedCategoryItem={setSelectedCategoryItem}
        />
        <ProductsContainer tempProducts={tempProducts} />
      </div>
    </>
  )
}
export default ProductsPage
