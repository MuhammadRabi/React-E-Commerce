import { FiPlusSquare, FiMinusSquare } from "react-icons/fi"
import { useDispatch } from "react-redux"
import { removeItem, increase, decrease } from "../Features/cartSlice"
const CartItem = ({ id, title, price, amount }) => {
  const dispatch = useDispatch()

  return (
    <article className="flex items-center justify-between text-xl mt-3 bg-white hover:bg-gray-50 duration-200 px-8 py-1.5  rounded-md">
      <div className="product-info">
        <p className="capitalize">{title}</p>
        <p className="text-sm text-gray-500 font-bold -mb-1">${price}</p>
        <span
          className="text-sm capitalize cursor-pointer font-semibold text-red-600 hover:text-red-700 duration-500"
          onClick={() => dispatch(removeItem(id))}
        >
          remove
        </span>
      </div>
      <div className="amount-control flex items-center justify-center">
        <span
          className="text-green-500 hover:text-green-600 text-[28px] cursor-pointer duration-500"
          onClick={() => dispatch(increase(id))}
        >
          <FiPlusSquare />
        </span>
        <span className="text-slate-800 w-6 h-6 rounded-sm flex items-center justify-center border-2 border-gray-300">
          {amount}
        </span>
        <span
          className="text-red-500 hover:text-red-600 text-[28px] cursor-pointer duration-500"
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
