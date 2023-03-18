import { useSelector } from "react-redux"
import Product from "./Product"
import Loading from "../UI/Loading"
import useProductsStore from "../../Features/productsStore"

const ProductsContainer = () => {
  /*   const { productsList, isLoading } = useSelector((state) => state.products)
   */
  const productsList = useProductsStore((state) => state.productsList)
  const isLoading = useProductsStore((state) => state.isLoading)

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
