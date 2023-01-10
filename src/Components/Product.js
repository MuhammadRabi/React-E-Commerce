import { useState } from "react"
import { FaPlusSquare, FaMinusSquare, FaCartPlus } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { addProduct } from "../Features/cartSlice"

const Product = ({ id, title, price, img }) => {
  const dispatch = useDispatch()
  const [amount, setAmount] = useState(1)

  const changeAmount = (type) => {
    if (type === "decrease" && amount > 1) {
      setAmount((prev) => prev - 1)
    } else {
      setAmount((prev) => prev + 1)
    }
  }

  return (
    <article className="bg-slate-50 flex flex-col items-center space-y-6 p-6 rounded-md border-slate-300 border shadow-lg">
      <h3 className="font-bold">{title}</h3>
      <img src={img} alt={title} className="w-24 h-24" />
      <span>${price}</span>
      <div className="flex justify-between w-full">
        <div
          className="icon text-red-500 text-[28px] cursor-pointer"
          onClick={() => changeAmount("decrease")}
        >
          <FaMinusSquare></FaMinusSquare>
        </div>
        <div className="text-xl border border-red-100 rounded-lg px-3">
          {amount}
        </div>

        {/*  {itemAmount && (
          <div className="text-xl border border-red-100 rounded-lg px-3">
            {itemAmount}
          </div>
        )} */}
        <div
          className="icon text-green-500 text-[28px] cursor-pointer"
          onClick={() => changeAmount("increase")}
        >
          <FaPlusSquare></FaPlusSquare>
        </div>
        <div
          className="icon text-green-500 text-[28px] cursor-pointer"
          onClick={() => {
            dispatch(addProduct({ id, title, price, img, amount }))
          }}
        >
          <FaCartPlus></FaCartPlus>
        </div>
      </div>
    </article>
  )
}
export default Product
