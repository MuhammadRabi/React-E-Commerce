import { useSelector } from "react-redux"
import Product from "./Product"
import Loading from "../UI/Loading"

const ProductsContainer = () => {
  const { productsList, isLoading } = useSelector((state) => state.products)

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
