import CartItem from "./CartItem";
import CartFooter from "./CartFooter";
import { useLocation } from "react-router-dom";
import { useCartStore } from "../../Features/cartStore";
import { useEffect } from "react";
import EmptyCart from "./EmptyCart";
import CartHeader from "./CartHeader";

const CartContainer = () => {
  const items = useCartStore((state) => state.items);
  const isCartOpen = useCartStore((state) => state.isCartOpen);
  const closeCart = useCartStore((state) => state.closeCart);
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
      <article className="flex flex-col w-full h-screen max-w-5xl mx-auto overflow-y-scroll rounded-md md:p-4 bg-slate-100 lg:p-8">
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
