import { useSelector } from "react-redux"
import Product from "./Product"
import Sort from "../Sort"
import Loading from "../UI/Loading"

const ProductsContainer = () => {
  const { productsList, isLoading } = useSelector((state) => state.products)
  console.log(productsList)

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <Sort />
      <section className="mt-12 mx-12 sm:mx-8 grid grid-cols-275 gap-6 md:mx-16 md:gap-8">
        {productsList.map((product) => {
          return <Product key={product.id} {...product} />
        })}
      </section>
    </>
  )
}
export default ProductsContainer
