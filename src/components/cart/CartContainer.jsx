import CartItem from "./CartItem";
import CartFooter from "./CartFooter";
import { useLocation } from "react-router-dom";
import { cartStore } from "../../Features/cartStore";
import { useEffect } from "react";
import EmptyCart from "./EmptyCart";
import CartHeader from "./CartHeader";

const CartContainer = () => {
  const items = cartStore((state) => state.items);
  const isCartOpen = cartStore((state) => state.isCartOpen);
  const closeCart = cartStore((state) => state.closeCart);
  const { pathname } = useLocation();

  useEffect(() => {
    closeCart();
  }, [pathname]);

  return (
    <section
      className={`hidden z-50 md:flex duration-1000 md:w-1/2 lg:w-1/3 fixed top-0 ${
        isCartOpen ? "right-0" : "-right-full"
      }`}
    >
      <article className="h-screen flex flex-col overflow-y-scroll rounded-md mx-auto md:p-4 bg-slate-100 w-full max-w-5xl lg:p-8">
        <CartHeader />
        {!items.length && <EmptyCart />}

        {items.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
        <CartFooter />
      </article>
    </section>
  );
};
export default CartContainer;
