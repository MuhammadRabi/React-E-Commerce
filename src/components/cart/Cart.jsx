import { useEffect } from "react";
import CartContainer from "./CartContainer";
import { cartStore } from "../../Features/cartStore";

const Cart = () => {
  const itemsInCart = cartStore((state) => state.items);
  const setCartGrandTotal = cartStore((state) => state.setCartGrandTotal);

  const calculateGrandTotal = () => {
    const grandTotal = itemsInCart
      .map((item) => {
        return item.price;
      })
      .reduce((prev, curr) => {
        return prev + curr;
      });
    console.log(grandTotal);
    setCartGrandTotal(grandTotal);
  };

  useEffect(() => {
    itemsInCart.length !== 0 && calculateGrandTotal();
  }, [itemsInCart]); // eslint-disable-line react-hooks/exhaustive-deps

  return <CartContainer />;
};
export default Cart;
