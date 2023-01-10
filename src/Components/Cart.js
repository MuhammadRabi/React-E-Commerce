import { AiOutlineShoppingCart } from "react-icons/ai"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const Cart = () => {
  const { amount } = useSelector((state) => state.cart)
  const navigate = useNavigate()
  return (
    <>
      <div
        className="rounded-full bg-gray-800/50 py-1 px-4 cursor-pointer md:px-8"
        onClick={() => {
          navigate("cart")
        }}
      >
        <div className="relative text-4xl hover:translate-x-1 hover:scale-105 duration-75">
          <AiOutlineShoppingCart />
        </div>
        <p className="absolute w-6 h-6 flex justify-center items-center rounded-full text-[18px] font-bold p-4 top-0 right-12 bg-red-700 text-white">
          {amount}
        </p>
      </div>
    </>
  )
}
export default Cart
