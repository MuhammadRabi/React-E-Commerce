import { Link } from "react-router-dom";
import { formatPrice } from "../../utils/helpers";
import { cartStore } from "../../Features/cartStore";
import { toast } from "react-toastify";
import AddToCartBtn from "./AddToCartBtn";

const Product = ({ id, name, price, image, description }) => {
  const addItemToCart = (item) => {
    addToCart(item);
    toast.success("Product added to cart!!");
  };
  const addToCart = cartStore((state) => state.addToCart);

  return (
    <article className="px-4 py-6 border rounded-md shadow-lg bg-gray-50 border-slate-300">
      <figure className="flex flex-col space-y-6">
        <Link to={`/products/${id}`} className="mt-2 cursor-pointer">
          <img src={image} alt={name} className="object-cover w-full h-44" />
        </Link>
        <figcaption className="text-center">
          <h2 className="mb-2 font-bold capitalize">{name.substring(0, 25)}</h2>
          <p className="mb-4 text-sm text-gray-500">
            {description.substring(0, 50)}
          </p>
          <span className="text-xl font-bold text-red-600">
            {formatPrice(price)}
          </span>
        </figcaption>
      </figure>
      <div className="flex flex-col w-full mt-2 text-center">
        <AddToCartBtn id={id} name={name} price={price} image={image} />
      </div>
    </article>
  );
};
export default Product;
