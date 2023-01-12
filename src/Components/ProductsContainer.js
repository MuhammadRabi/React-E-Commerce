import cartItemsData from "../cartItemsData"
import Product from "./Product"

const ProductsContainer = () => {
  return (
    <section className="mx-12 sm:mx-8 grid grid-cols-275 gap-6 md:mx-16 md:gap-8">
      {cartItemsData.map((product) => {
        return <Product key={product.id} {...product} />
      })}
    </section>
  )
}
export default ProductsContainer

// grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4
