import { cartStore } from "../../Features/cartStore";
import { toast } from "react-toastify";
import { FaCartPlus } from "react-icons/fa";

const AddToCartBtn = ({ id, name, price, image }) => {
  const addToCart = cartStore((state) => state.addToCart);

  const addItemToCart = (item) => {
    addToCart(item);
    toast.success("Product added to cart!");
  };
  return (
    <button
      className="flex items-center px-6 py-2 mx-auto space-x-4 text-white duration-300 bg-green-500 rounded-md outline-none cursor-pointer w-fit hover:bg-green-700"
      onClick={() => {
        addItemToCart({ id, name, price, image });
      }}
    >
      <span>Add to cart</span>
      <FaCartPlus className="text-2xl"></FaCartPlus>
    </button>
  );
};
export default AddToCartBtn;
