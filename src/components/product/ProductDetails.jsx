import ProductImages from "./ProductImages"
import ProductRating from "./ProductRating"
import { FaCartPlus } from "react-icons/fa"
import { cartStore } from "../../Features/cartStore"

const ProductDetails = ({
  images,
  price,
  description,
  category,
  name,
  company,
  rating,
  stock,
}) => {
  const addToCart = cartStore((state) => state.addToCart)
  return (
    <article className="grid grid-cols-1 md:grid-cols-2 justify-center items-center mt-6">
      <ProductImages images={images} />
      <div className="flex flex-col justify-center space-y-4 h-full px-12 my-4">
        <h1 className="text-4xl font-semibold capitalize">{name} </h1>
        <ProductRating rating={rating} />
        <p className="text-red-700 text-2xl font-bold">
          ${(price / 100).toFixed(2)}
        </p>
        <p>{description}</p>
        <div className="flex flex-col space-y-2">
          <p>
            <span className="font-bold">Category : </span>
            {category}
          </p>
          <p>
            <span className="font-bold">Brand : </span>
            {company}
          </p>
          <p>
            <span className="font-bold">Available : </span>{" "}
            {stock ? "In Stock" : "Out of Stock"}
          </p>
        </div>
        <hr />
        {stock > 0 && (
          <button
            className="py-2 px-6 rounded-md text-white bg-green-500 flex items-center space-x-4 w-fit cursor-pointer outline-none hover:bg-green-700 duration-300"
            onClick={() => {
              addToCart({ id, name, price, images })
            }}
          >
            <span>Add to cart</span>
            <FaCartPlus className="text-2xl"></FaCartPlus>
          </button>
        )}
      </div>
    </article>
  )
}
export default ProductDetails
