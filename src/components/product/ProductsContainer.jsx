import Product from "./Product"
import Loading from "../UI/Loading"
import productStore from "../../Features/productStore"

const ProductsContainer = () => {
  /*   const { productsList, isLoading } = useSelector((state) => state.products)
   */
  const productsList = productStore((state) => state.productsList)
  const isLoading = productStore((state) => state.isLoading)

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <section className="mt-12 grid md:grid-cols-2 xl:grid-cols-3 gap-9">
        {productsList.map((product) => {
          return <Product key={product.id} {...product} />
        })}
      </section>
    </>
  )
}
export default ProductsContainer
