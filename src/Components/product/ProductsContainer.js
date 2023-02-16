import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../../Features/productSlice"
import Product from "./Product"
import Sort from "../Sort"
import Loading from "../UI/Loading"

const ProductsContainer = () => {
  const { productsList, isLoading } = useSelector((state) => state.products)
  const dispatch = useDispatch()
  console.log(productsList)

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

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
