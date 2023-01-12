import { /* FaPlusSquare, FaMinusSquare, */ FaCartPlus } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { addProduct } from "../Features/cartSlice"

const Product = ({ id, title, price, img }) => {
  const dispatch = useDispatch()

  return (
    <article className="bg-slate-50 flex flex-col items-center space-y-6 p-6 rounded-md border-slate-300 border shadow-lg">
      <h3 className="font-bold">{title}</h3>
      <img src={img} alt={title} className="w-24 h-24" />
      <span>${price}</span>
      <div className="flex w-full">
        <div
          className="text-green-500 text-[28px] ml-auto cursor-pointer hover:scale-125 duration-300"
          onClick={() => {
            dispatch(addProduct({ id, title, price, img }))
          }}
        >
          <FaCartPlus></FaCartPlus>
        </div>
      </div>
    </article>
  )
}
export default Product
