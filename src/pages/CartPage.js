import CartContainer from "../Components/cart/CartContainer"
import { useSelector } from "react-redux"
import GoHome from "../Components/UI/GoHome"

const CartPage = () => {
  const { items } = useSelector((state) => state.cart)

  return (
    <>
      {items.length === 0 ? (
        <div className="flex flex-col space-y-10">
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
