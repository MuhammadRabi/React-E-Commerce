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
        <AddToCartBtn id={id} name={name} price={price} image={image} />
      </div>
    </article>
  );
};
export default Product;
