import { Outlet } from "react-router-dom";
import Navbar from "../components/UI/Navbar";
import Sidebar from "../components/UI/Sidebar";
import Footer from "../components/footer/Footer";
import Modal from "../components/UI/Modal";
import { useEffect } from "react";
import { useProductStore } from "../Features/productStore";
import { useModalStore } from "../Features/modalStore";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import ScrollTop from "../components/UI/ScrollTop";
import Cart from "../components/cart/Cart";

const Root = () => {
  const isModalOpen = useModalStore((state) => state.isModalOpen);
  const getProducts = useProductStore((state) => state.getProducts);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <main className="relative">
      {isModalOpen && <Modal />}
      <Navbar />
      <Sidebar />
      <Cart />
      <Outlet />
      <Footer />
      <ScrollTop />
      <ToastContainer position="top-center" autoClose={2000} />
    </main>
  );
};
export default Root;
