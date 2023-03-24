import { FaCartPlus } from "react-icons/fa"
import { Link } from "react-router-dom"
import { formatPrice } from "../../utils/helpers"
import { cartStore } from "../../Features/cartStore"

const Product = ({ id, name, price, image, description }) => {
  const addToCart = cartStore((state) => state.addToCart)

  return (
    <article className="bg-gray-50 py-6 px-4 rounded-md border-slate-300 border shadow-lg">
      <figure className="flex flex-col space-y-6">
        <Link to={`/products/${id}`} className="mt-2 cursor-pointer">
          <img src={image} alt={name} className="w-full object-cover h-44" />
        </Link>
        <figcaption className="text-center">
          <h2 className="font-bold mb-2 capitalize">{name.substring(0, 25)}</h2>
          <p className="mb-4 text-gray-500 text-sm">
            {description.substring(0, 50)}
          </p>
          <span className="text-red-600 text-xl font-bold">
            {formatPrice(price)}
          </span>
        </figcaption>
      </figure>
      <div className="flex flex-col text-center w-full mt-2">
        <button
          className="mx-auto py-2 px-6 rounded-md text-white bg-green-500 flex items-center space-x-4 w-fit cursor-pointer outline-none hover:bg-green-700 duration-300"
          onClick={() => {
            addToCart({ id, name, price, image })
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
