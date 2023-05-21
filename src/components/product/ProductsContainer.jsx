import Product from "./Product";
import productStore from "../../Features/productStore";
import ProductSkeleton from "./ProductSkeleton";

const ProductsContainer = ({ tempProducts }) => {
  const isLoading = productStore((state) => state.isLoading);

  return (
    <>
      <section className="grid justify-center auto-rows-auto col-span-full lg:col-span-6 md:grid-cols-2 xl:grid-cols-3 gap-9">
        {isLoading && <ProductSkeleton cards={15} />}

        {tempProducts.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </section>
    </>
  );
};
export default ProductsContainer;
