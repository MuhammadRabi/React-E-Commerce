import Quote from "../components/Quote";
import Layout from "../components/UI/Layout";
import Promotional from "../components/UI/Promotional";
import FeaturedProducts from "../components/product/FeaturedProducts";

const HomePage = () => {
  return (
    <>
      <Layout>
        <Promotional />
        <FeaturedProducts />
      </Layout>
      <Quote />
    </>
  );
};

export default HomePage;
