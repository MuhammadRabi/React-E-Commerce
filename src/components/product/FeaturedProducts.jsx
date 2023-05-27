import { useProductStore } from "../../Features/productStore";
import SectionHeadline from "../UI/SectionHeadline";
import Product from "./Product";
import ProductSkeleton from "./ProductSkeleton";

const FeaturedProducts = () => {
  const featuredProducts = useProductStore((state) => state.featuredProducts);
  const isLoading = useProductStore((state) => state.isLoading);

  return (
    <>
      <SectionHeadline name="Featured Products" />
      <section className="grid justify-center gap-6 mt-12 sm:mx-8 grid-cols-275 md:mx-16 md:gap-8">
        {isLoading && <ProductSkeleton cards={4} />}
        {featuredProducts.slice(0, 4).map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </section>
    </>
  );
};
export default FeaturedProducts;
