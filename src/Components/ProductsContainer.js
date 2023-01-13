import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../Features/productSlice"
import Product from "./Product"

const ProductsContainer = () => {
  const { products } = useSelector((state) => state.products)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <section className="mx-12 sm:mx-8 grid grid-cols-275 gap-6 md:mx-16 md:gap-8">
      {products.map((product) => {
        return <Product key={product.id} {...product} />
      })}
    </section>
  )
}
export default ProductsContainer
