import { useEffect } from "react";
import CartContainer from "../components/cart/CartContainer";
import EmptyCart from "../components/cart/emptyCart";
import { cartStore } from "../Features/cartStore";
import Layout from "../components/UI/Layout";

const CartPage = () => {
  // replace it with itemsInCart
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
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Layout>
      {itemsInCart.length === 0 ? <EmptyCart /> : <CartContainer />}
    </Layout>
  );
};
export default CartPage;
