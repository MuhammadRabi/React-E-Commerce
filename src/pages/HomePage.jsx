import Quote from "../components/Quote";
import Test from "../components/Test";
import Services from "../components/Services";
import Layout from "../components/UI/Layout";
import Promotional from "../components/UI/Promotional";
import Hero from "../components/hero/Hero";
import FeaturedProducts from "../components/product/FeaturedProducts";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Layout>
        <Promotional />
        <FeaturedProducts />
      </Layout>
      <Quote />
      <Test />
      <Services />
    </>
  );
};

export default HomePage;
