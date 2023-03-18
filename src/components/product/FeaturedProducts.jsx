import useProductsStore from "../../Features/productsStore"
import SectionHeadline from "../UI/SectionHeadline"
import Product from "./Product"

const FeaturedProducts = () => {
  const featuredProducts = useProductsStore((state) => state.featuredProducts)

  return (
    <>
      <SectionHeadline name="Featured Products" />
      <section className="mt-12 sm:mx-8 grid grid-cols-275 gap-6 md:mx-16 md:gap-8">
        {featuredProducts.slice(0, 4).map((product) => {
          return <Product key={product.id} {...product} />
        })}
      </section>
    </>
  )
}
export default FeaturedProducts
