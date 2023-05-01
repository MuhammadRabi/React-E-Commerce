import { Outlet } from "react-router-dom";
import Navbar from "../components/UI/Navbar";
import Layout from "../components/UI/Layout";
import Footer from "../components/UI/Footer";
import Modal from "../components/UI/Modal";
import { useEffect } from "react";
import productStore from "../Features/productStore";
import { modalStore } from "../Features/modalStore";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const Root = () => {
  const isModalOpen = modalStore((state) => state.isModalOpen);
  const { getProducts } = productStore((state) => ({
    sort: state.sort,
    getProducts: state.getProducts,
    updateSort: state.updateSort,
  }));

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <main className="relative">
      {isModalOpen && <Modal />}
      <Navbar />
      {/*       <Layout>
       */}{" "}
      <Outlet />
      {/*       </Layout>
       */}{" "}
      <Footer />
      <ToastContainer position="top-center" autoClose={2000} />
    </main>
  );
};
export default Root;
