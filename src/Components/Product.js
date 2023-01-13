import { /* FaPlusSquare, FaMinusSquare, */ FaCartPlus } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { addProduct } from "../Features/cartSlice"

const Product = ({ id, title, price, images }) => {
  const dispatch = useDispatch()

  return (
    <article className="bg-slate-50 py-8 px-6 rounded-md border-slate-300 border shadow-lg">
      <figure className="flex flex-col items-center space-y-6">
        <img src={images[3]} alt={title} className="w-24 h-24" />
        <figcaption className="text-center">
          <h3 className="font-bold mb-2">{title}</h3>
          <span>
            <span className="font-bold text-red-500">Price</span>: $
            {price.toFixed(2)}
          </span>
        </figcaption>
      </figure>
      <div className="flex text-center w-full mt-6">
        <button
          className="mx-auto py-1 px-6 text-lg rounded-md text-white bg-green-500 font-bold flex items-center space-x-4 w-fit cursor-pointer outline-none hover:bg-green-600 hover:scale-105 duration-300"
          onClick={() => {
            dispatch(addProduct({ id, title, price, images }))
          }}
        >
          <span>Add to cart</span>
          <FaCartPlus></FaCartPlus>
        </button>
        {/* <div
          className="text-green-500 text-[28px] ml-auto cursor-pointer hover:scale-125 duration-300"
          onClick={() => {
            dispatch(addProduct({ id, title, price, img }))
          }}
        >
          <FaCartPlus></FaCartPlus>
        </div> */}
      </div>
    </article>
  )
}
export default Product
