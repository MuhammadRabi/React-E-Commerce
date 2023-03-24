import { useState } from "react"
import { FiPlusSquare, FiMinusSquare } from "react-icons/fi"

const QuantityCounter = ({ onIncreaseBtn, onDecreaseBtn }) => {
  const [quantity, setQuantity] = useState(1)

  const increase = () => {
    setQuantity((prev) => prev + 1)
    onIncreaseBtn()
  }
  const decrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1)
      onDecreaseBtn()
    }
  }

  return (
    <div className="flex items-center space-x-2 justify-center">
      <span
        className="text-green-500 hover:text-green-700 text-[24px] sm:text-[44px] cursor-pointer duration-500"
        onClick={increase}
      >
        <FiPlusSquare />
      </span>
      <p className="text-slate-800 w-4 h-4 p-2.5  rounded-sm flex items-center justify-center border-2 border-gray-300 sm:p-4 sm:w-7 sm:h-7">
        {quantity}
      </p>
      <span
        className="text-red-500 hover:text-red-700 text-[24px] sm:text-[44px] cursor-pointer duration-500"
        onClick={decrease}
      >
        <FiMinusSquare />
      </span>
    </div>
  )
}
export default QuantityCounter
