import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "../../Features/cartStore";
import { formatPrice } from "../../utils/helpers";
import QuantityCounter from "./QuantityCounter";
import { BsCartDashFill } from "react-icons/bs";

const CartItem = ({ id, name, price, amount, image }) => {
  const [itemSubTotal, setItemSubTotal] = useState(price);

  const increaseCartGrandTotal = useCartStore(
    (state) => state.increaseCartGrandTotal
  );
  const decreaseCartGrandTotal = useCartStore(
    (state) => state.decreaseCartGrandTotal
  );
  const removeItem = useCartStore((state) => state.removeItem);

  const quantityIncrease = () => {
    setItemSubTotal(itemSubTotal + price);
    increaseCartGrandTotal(price);
  };

  const quantityDecrease = () => {
    setItemSubTotal(itemSubTotal - price);
    decreaseCartGrandTotal(price);
  };

  const removeFromCart = (id) => {
    decreaseCartGrandTotal(itemSubTotal);
    removeItem(id);
  };

  return (
    <article className="flex items-center justify-between px-4 py-2 my-4 bg-white rounded-md hover:bg-gray-50 sm:px-8">
      <Link to={`/products/${id}`}>
        <img
          src={image}
          alt={name}
          className="object-cover w-16 h-16 rounded-md aspect-square md:w-24 md:h-24"
        />
      </Link>
      <div className="flex-1 ml-4 space-y-2 product-info sm:ml-8">
        <p className="capitalize">{name}</p>
        <p className="-mb-1 font-bold text-gray-500">{formatPrice(price)}</p>
        <span
          className="text-2xl font-semibold text-red-500 duration-500 cursor-pointer hover:text-red-700"
          onClick={() => removeFromCart(id)}
        >
          <BsCartDashFill />
        </span>
      </div>
      <div className="flex flex-col p-4">
        <h6 className="text-sm">sub total</h6>
        <span className="block mt-3">{formatPrice(itemSubTotal)}</span>
        <QuantityCounter
          onIncreaseBtn={quantityIncrease}
          onDecreaseBtn={quantityDecrease}
        />
      </div>
    </article>
  );
};
export default CartItem;
