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
      className="mx-auto py-2 px-6 rounded-md text-white bg-green-500 flex items-center space-x-4 w-fit cursor-pointer outline-none hover:bg-green-700 duration-300"
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
