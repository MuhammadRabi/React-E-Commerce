import { FaCartPlus } from "react-icons/fa";

const EmptyCart = () => {
  return (
    <div className="flex flex-col mt-24 space-y-24">
      <p className="text-center text-xl capitalize">
        there is no items available in your cart
      </p>
      <FaCartPlus className="mx-auto text-9xl text-gray-300" />
    </div>
  );
};
export default EmptyCart;
