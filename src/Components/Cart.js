import { AiOutlineShoppingCart } from "react-icons/ai"

const Cart = () => {
  return (
    <>
      <div className="cart-icon rounded-full bg-gray-800/50 w-80 py-3 px-10">
        <div className="flex justify-between items-center">
          <p>your cart</p>
          <AiOutlineShoppingCart />
          <span className="w-8 h-8 flex justify-center items-center rounded-full text-[22px] font-bold p-1 top-8 right-12 bg-red-700 text-white">
            3
          </span>
        </div>
      </div>
    </>
  )
}
export default Cart
