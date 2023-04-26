import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { cartStore } from "../../Features/cartStore";
import { AiOutlineHeart } from "react-icons/ai";

const Cart = () => {
  const itemsInCart = cartStore((state) => state.items);
  return (
    <>
      <Link to="cart">
        <div className="hidden px-4 py-1 rounded-full cursor-pointer lg:block md:px-8">
          <div className="relative flex space-x-4 text-4xl duration-75">
            <AiOutlineHeart />
            <AiOutlineShoppingCart />
          </div>
          <p className="absolute w-6 h-6 flex justify-center items-center rounded-full text-[18px] font-bold p-4 top-0 right-32 bg-red-700 z-10 text-white">
            {itemsInCart.length}
          </p>
        </div>
      </Link>
    </>
  );
};
export default Cart;
