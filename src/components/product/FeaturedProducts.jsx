import productStore from "../../Features/productStore";
import SectionHeadline from "../UI/SectionHeadline";
import Product from "./Product";

const FeaturedProducts = () => {
  const featuredProducts = productStore((state) => state.featuredProducts);

  return (
    <>
      <SectionHeadline name="Featured Products" />
      <section className="grid gap-6 mt-12 sm:mx-8 grid-cols-275 md:mx-16 md:gap-8">
        {featuredProducts.slice(0, 4).map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </section>
    </>
  );
};
export default FeaturedProducts;
