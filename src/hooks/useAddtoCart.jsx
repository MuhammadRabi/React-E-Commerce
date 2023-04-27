import { toast } from "react-toastify";
import { cartStore } from "../Features/cartStore";

const useAddtoCart = (product) => {
  const addToCart = cartStore((state) => state.addToCart);

  const addItemToCart = (product) => {
    addToCart(product);
    toast.success("Product added to cart!");
  };
  return { addItemToCart };
};

export default useAddtoCart;
