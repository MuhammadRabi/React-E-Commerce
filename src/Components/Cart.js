import { AiOutlineShoppingCart } from "react-icons/ai"

const Cart = () => {
  return (
    <>
      <div className="cart-icon rounded-full bg-gray-800/50 w-80 py-2 px-10">
        <div className="flex justify-between items-center">
          <p>your cart</p>
          <AiOutlineShoppingCart />
          <p className="w-9 h-9 flex justify-center items-center rounded-full text-[20px] font-bold p-4 top-8 right-12 bg-red-700 text-white">
            11
          </p>
        </div>
      </div>
    </>
  )
}
export default Cart
