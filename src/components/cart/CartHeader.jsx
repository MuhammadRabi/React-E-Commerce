import { cartStore } from "../../Features/cartStore";
import { GrClose } from "react-icons/gr";

const CartHeader = () => {
  const items = cartStore((state) => state.items);
  const closeCart = cartStore((state) => state.closeCart);
  return (
    <header className="flex items-center justify-between border-b-2 pb-4 border-b-red-800/90">
      <h2 className="text-center capitalize bg-red-800/90 w-fit text-white rounded-md px-6 py-2">
        shopping cart ({items.length})
      </h2>
      <p
        className="text-right cursor-pointer hover:rotate-90 hover:scale-125 duration-300"
        onClick={() => closeCart()}
      >
        <GrClose className="text-2xl" />
      </p>
    </header>
  );
};
export default CartHeader;
