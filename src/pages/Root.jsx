import { Outlet } from "react-router-dom";
import Navbar from "../components/UI/Navbar";
import Layout from "../components/UI/Layout";
import Modal from "../components/UI/Modal";
import { useEffect } from "react";
import productStore from "../Features/productStore";
import { modalStore } from "../Features/modalStore";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const Root = () => {
  //const cartStore((state)=>
  const isModalOpen = modalStore((state) => state.isModalOpen);

  const { getProducts } = productStore((state) => ({
    sort: state.sort,
    getProducts: state.getProducts,
    updateSort: state.updateSort,
  }));
  /* 
  useEffect(() => {
      addToLocalStorage(cart.items)
    calculateTotalPrice()
  }, [cart.items])
 */
  useEffect(() => {
    getProducts();
  }, []);

  const setSearchQuery = productStore((state) => state.setSearchQuery);
  const searchQuery = productStore((state) => state.searchQuery);

  useEffect(() => {
    setSearchQuery(searchQuery);
  }, [searchQuery]);

  return (
    <main className="relative">
      {isModalOpen && <Modal />}
      <Navbar />
      <Layout>
        <Outlet />
      </Layout>
      <ToastContainer position="top-center" autoClose={3000} />
    </main>
  );
};
export default Root;
