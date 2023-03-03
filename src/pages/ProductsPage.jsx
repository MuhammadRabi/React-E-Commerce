import FilterBar from "../components/FilterBar"
import ProductsContainer from "../components/product/ProductsContainer"
import SearchBar from "../components/UI/SearchBar"
import Sort from "../components/Sort"

const ProductsPage = () => {
  return (
    <>
      <Sort />
      <div className="grid gap-12 sm:grid-cols-[200px,1fr]">
        <FilterBar />
        <ProductsContainer />
      </div>
    </>
  )
}
export default ProductsPage
