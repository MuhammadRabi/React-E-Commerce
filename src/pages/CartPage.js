import CartContainer from "../components/cart/CartContainer"
import { useSelector } from "react-redux"
import GoHome from "../components/UI/GoHome"

const CartPage = () => {
  const { items } = useSelector((state) => state.cart)

  return (
    <>
      {items.length === 0 ? (
        <div className="flex flex-col space-y-12 mt-40 h-[calc(100vh-330px)]">
          <p className="text-center text-xl">
            there is no items available in your cart
          </p>
          <GoHome />
        </div>
      ) : (
        <CartContainer />
      )}
    </>
  )
}
export default CartPage
