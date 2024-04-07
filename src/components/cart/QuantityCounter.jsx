import { useState } from "react"

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
    <div className="flex items-center justify-center w-20 space-x-2 border border-gray-300">
      <div
        className="text-red-400 duration-500 cursor-pointer hover:text-red-600"
        onClick={decrease}
      >
        -
      </div>
      <span className="flex items-center justify-center w-6 h-6 bg-gray-100 text-slate-800">
        {quantity}
      </span>
      <div
        className="text-green-400 duration-500 cursor-pointer hover:text-green-600"
        onClick={increase}
      >
        +
      </div>
    </div>
  )
}
export default QuantityCounter
