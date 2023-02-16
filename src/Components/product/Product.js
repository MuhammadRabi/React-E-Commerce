import { FaCartPlus } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { addProduct } from "../../Features/cartSlice"

const Product = ({ id, name, price, image, description }) => {
  const dispatch = useDispatch()

  return (
    <article className="bg-gray-50 py-6 px-4 rounded-md border-slate-300 border shadow-lg">
      <figure className="flex flex-col items-center space-y-6">
        <img src={image} alt={name} className="max-w-full h-48" />
        <figcaption className="text-center">
          <h2 className="font-bold mb-2 capitalize">{name.substring(0, 25)}</h2>
          <p className="mb-4 text-gray-500 text-sm">
            {description.substring(0, 50)}
          </p>
          <span className="text-red-600 text-xl font-bold">
            ${(price / 100).toFixed(2)}
          </span>
        </figcaption>
      </figure>
      <div className="flex flex-col text-center w-full mt-2">
        <button
          className="mx-auto py-2 px-6 rounded-md text-white bg-green-500 flex items-center space-x-4 w-fit cursor-pointer outline-none hover:bg-green-700 duration-300"
          onClick={() => {
            dispatch(addProduct({ id, name, price, image }))
          }}
        >
          <span>Add to cart</span>
          <FaCartPlus className="text-2xl"></FaCartPlus>
        </button>
        <Link to={`${id}`} className="mt-2 cursor-pointer">
          Details
        </Link>
      </div>
    </article>
  )
}
export default Product
