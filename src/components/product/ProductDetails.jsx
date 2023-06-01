import ProductImages from "./ProductImages";
import ProductRating from "./ProductRating";
import { FaCartPlus, FaHeart } from "react-icons/fa";
import useAddtoCart from "../../hooks/useAddtoCart";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductDetails = ({
  id,
  images,
  price,
  description,
  category,
  name,
  company,
  rating,
  stock,
}) => {
  const product = { id, name, price, images };
  const { addItemToCart } = useAddtoCart(product);

  return (
    <article className="grid items-center justify-center grid-cols-1 mt-6 md:grid-cols-2">
      <ProductImages images={images} />
      <div className="flex flex-col justify-center h-full px-12 my-4 space-y-4">
        <h1 className="text-4xl font-semibold text-teal-600 capitalize">
          {name}{" "}
        </h1>
        <ProductRating rating={rating} />
        {(
          <p className="text-2xl font-bold text-red-700">
            ${(price / 100).toFixed(2)}
          </p>
        ) || <Skeleton />}
        {<p>{description}</p> || <Skeleton count={6} width={200} />}
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
          <div className="flex space-x-4">
            <button
              className="flex items-center px-4 py-2 mt-5 text-white duration-300 rounded-md outline-none bg-main hover:to-teal-400"
              onClick={() => addItemToCart(product)}
            >
              <FaCartPlus className="mr-3 text-2xl" />
              Add to cart
            </button>
            {/* experimental feature */}
            <button
              className="flex items-center px-4 py-2 mt-5 text-white duration-300 rounded-md outline-none bg-main hover:to-teal-400"
              onClick={() => addItemToCart(product)}
              disabled
            >
              <FaHeart className="mr-3 text-2xl" />
              Add to wishlist
            </button>
          </div>
        )}
      </div>
    </article>
  );
};
export default ProductDetails;
