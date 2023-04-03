import ProductImages from "./ProductImages";
import ProductRating from "./ProductRating";
import AddToCartBtn from "./AddToCartBtn";
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
  return (
    <article className="grid items-center justify-center grid-cols-1 mt-6 md:grid-cols-2">
      <ProductImages images={images} />
      <div className="flex flex-col justify-center h-full px-12 my-4 space-y-4">
        <h1 className="text-4xl font-semibold capitalize">{name} </h1>
        <ProductRating rating={rating} />
        <p className="text-2xl font-bold text-red-700">
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
          <AddToCartBtn id={id} name={name} price={price} images={images} />
        )}
      </div>
    </article>
  );
};
export default ProductDetails;
