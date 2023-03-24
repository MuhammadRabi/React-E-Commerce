import { useState } from "react"
import { Link } from "react-router-dom"
import { cartStore } from "../../Features/cartStore"
import { formatPrice } from "../../utils/helpers"
import QuantityCounter from "./QuantityCounter"

const CartItem = ({ id, name, price, amount, image }) => {
  const [itemSubTotal, setItemSubTotal] = useState(price)

  const increaseCartGrandTotal = cartStore(
    (state) => state.increaseCartGrandTotal
  )
  const decreaseCartGrandTotal = cartStore(
    (state) => state.decreaseCartGrandTotal
  )
  const removeItem = cartStore((state) => state.removeItem)

  const quantityIncrease = () => {
    setItemSubTotal(itemSubTotal + price)
    increaseCartGrandTotal(price)
  }

  const quantityDecrease = () => {
    setItemSubTotal(itemSubTotal - price)
    decreaseCartGrandTotal(price)
  }

  const removeFromCart = (id) => {
    decreaseCartGrandTotal(itemSubTotal)
    removeItem(id)
  }

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
          onClick={() => removeFromCart(id)}
        >
          remove
        </span>
      </div>
      {/*       need revamp
       */}{" "}
      <div className="p-4">
        <h6>sub total</h6>
        <span className="block mt-3">{formatPrice(itemSubTotal)}</span>
      </div>
      <QuantityCounter
        onIncreaseBtn={quantityIncrease}
        onDecreaseBtn={quantityDecrease}
      />
    </article>
  )
}
export default CartItem
