import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ProductDetails from "../components/product/ProductDetails";
import Layout from "../components/UI/Layout";
import ProductDetailsSkeleton from "../components/product/ProductDetailsSkeleton";

const ProductDetailPage = () => {
  const single_product_url =
    "https://course-api.com/react-store-single-product?id=";
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchSingleProduct = async (id) => {
    try {
      setIsLoading(true);
      const res = await fetch(`${single_product_url}${id}`);
      const data = await res.json();
      setSingleProduct(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSingleProduct(id);
  }, [setSingleProduct, id]);

  return (
    <Layout>
      <Link to="/" className="px-4 py-2 ml-8 text-white bg-red-700 rounded-md">
        continue shopping
      </Link>
      <ProductDetails {...singleProduct} />
      {isLoading && <ProductDetailsSkeleton />}
    </Layout>
  );
};
export default ProductDetailPage;
