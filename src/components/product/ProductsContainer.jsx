import Product from "./Product";
import Loading from "../UI/Loading";
import productStore from "../../Features/productStore";

const ProductsContainer = ({ tempProducts }) => {
  const isLoading = productStore((state) => state.isLoading);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <section className="grid mt-12 md:grid-cols-2 xl:grid-cols-3 gap-9">
        {tempProducts.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </section>
    </>
  );
};
export default ProductsContainer;
