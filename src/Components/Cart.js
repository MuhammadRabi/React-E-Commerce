import { AiOutlineShoppingCart } from "react-icons/ai"
import { useSelector } from "react-redux"

const Cart = () => {
  const { amount } = useSelector((state) => state.cart)
  return (
    <>
      <div className="cart-icon rounded-full bg-gray-800/50 w-36 md:w-80 py-2 px-4 md:px-10">
        <div className="flex justify-between items-center">
          <p className="text-sm md:text-2xl">your cart</p>
          <AiOutlineShoppingCart />
          <p className="w-9 h-9 flex justify-center items-center rounded-full text-[20px] font-bold p-4 top-8 right-12 bg-red-700 text-white">
            {amount}
          </p>
        </div>
      </div>
    </>
  )
}
export default Cart
