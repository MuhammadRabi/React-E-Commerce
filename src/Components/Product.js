import { FaCartPlus } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { addProduct } from "../Features/cartSlice"

const Product = ({ id, title, price, images, description }) => {
  const dispatch = useDispatch()

  return (
    <article className="bg-gray-50 py-8 px-4 rounded-md border-slate-300 border shadow-lg">
      <figure className="flex flex-col items-center space-y-6">
        <img src={images[3]} alt={title} className="max-w-full h-48" />
        <figcaption className="text-center">
          <h2 className="font-bold mb-2">{title.substring(0, 25)}</h2>
          <p className="mb-5 text-gray-500 text-sm">
            {description.substring(0, 50)}
          </p>
          <span>
            <span className="font-bold text-red-500">Price</span>: $
            {price.toFixed(2)}
          </span>
        </figcaption>
      </figure>
      <div className="flex text-center w-full mt-6">
        <button
          className="mx-auto py-2 px-6 rounded-md text-white bg-green-500 flex items-center space-x-4 w-fit cursor-pointer outline-none hover:bg-green-700 duration-300"
          onClick={() => {
            dispatch(addProduct({ id, title, price, images }))
          }}
        >
          <span>Add to cart</span>
          <FaCartPlus className="text-2xl"></FaCartPlus>
        </button>
      </div>
    </article>
  )
}
export default Product
