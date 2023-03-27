import { AiOutlineShoppingCart } from "react-icons/ai"
import { Link } from "react-router-dom"
import { cartStore } from "../../Features/cartStore"
import { AiOutlineHeart } from "react-icons/ai"

const Cart = () => {
  const itemsInCart = cartStore((state) => state.items)
  return (
    <>
      <Link to="cart">
        <div className="hidden rounded-full lg:block bg-gray-800/50 py-1 px-4 cursor-pointer md:px-8">
          <div className="flex space-x-4 relative text-4xl hover:translate-x-1 hover:scale-105 duration-75">
            <AiOutlineHeart />
            <AiOutlineShoppingCart />
          </div>
          <p className="absolute w-6 h-6 flex justify-center items-center rounded-full text-[18px] font-bold p-4 top-0 right-12 bg-red-700 z-10 text-white">
            {itemsInCart.length}
          </p>
        </div>
      </Link>
    </>
  )
}
export default Cart
