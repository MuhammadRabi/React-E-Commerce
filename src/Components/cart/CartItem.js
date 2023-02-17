import { FiPlusSquare, FiMinusSquare } from "react-icons/fi"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { removeItem, increase, decrease } from "../../Features/cartSlice"
import { formatPrice } from "../../utils/helpers"

const CartItem = ({ id, name, price, amount, image }) => {
  const dispatch = useDispatch()

  return (
    <article className="flex items-center justify-between text-xl my-6 bg-white hover:bg-gray-50 px-4 sm:px-8 py-6 rounded-md">
      <Link to={`/products/${id}`}>
        <img
          src={image}
          alt={name}
          className="w-16 h-16 md:w-24 md:h-24 rounded-md"
        />
      </Link>
      <div className="product-info text-lg flex-1 space-y-2 ml-4 sm:ml-8">
        <p className="capitalize text-xl">{name}</p>
        <p className="text-gray-500 font-bold -mb-1">{formatPrice(price)}</p>
        <span
          className="capitalize cursor-pointer font-semibold text-red-600 hover:text-red-700 duration-500"
          onClick={() => dispatch(removeItem(id))}
        >
          remove
        </span>
      </div>
      <div className="amount-control flex items-center space-x-2 justify-center">
        <span
          className="text-green-500 hover:text-green-700 text-[24px] sm:text-[44px] cursor-pointer duration-500"
          onClick={() => dispatch(increase(id))}
        >
          <FiPlusSquare />
        </span>
        <p className="text-slate-800 w-4 h-4 p-2.5  rounded-sm flex items-center justify-center border-2 border-gray-300 sm:p-4 sm:w-7 sm:h-7">
          {amount}
        </p>
        <span
          className="text-red-500 hover:text-red-700 text-[24px] sm:text-[44px] cursor-pointer duration-500"
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id))
            }
            dispatch(decrease(id))
          }}
        >
          <FiMinusSquare />
        </span>
      </div>
    </article>
  )
}
export default CartItem
