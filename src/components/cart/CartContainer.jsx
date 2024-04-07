import CartItem from "./CartItem"
import CartFooter from "./CartFooter"
import { useCartStore } from "../../Features/cartStore"
import EmptyCart from "./EmptyCart"
import CartHeader from "./CartHeader"

const CartContainer = () => {
  const items = useCartStore((state) => state.items)
  const isCartOpen = useCartStore((state) => state.isCartOpen)

  return (
    <section
      className={`z-50 flex duration-1000 md:w-1/2 lg:w-1/3 fixed top-0 ${
        isCartOpen ? "right-0" : "-right-[120%]"
      }`}
    >
      <article className="flex flex-col w-full h-screen max-w-5xl py-4 mx-auto overflow-y-scroll rounded-md md:p-8 bg-slate-100 lg:px-4">
        <CartHeader />
        {!items.length && <EmptyCart />}

        {items.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
        <CartFooter />
      </article>
    </section>
  )
}
export default CartContainer
