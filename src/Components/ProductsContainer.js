import cartItemsData from "../cartItemsData"
import Product from "./Product"

const ProductsContainer = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
      {cartItemsData.map((product) => {
        return <Product key={product.id} {...product} />
      })}
    </section>
  )
}
export default ProductsContainer
