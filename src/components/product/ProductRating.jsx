import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const ProductRating = ({ rating }) => {
  return (
    <>
      <span className="flex text-amber-500">
        <BsStarFill />
        <BsStarFill />
        <BsStarFill />
        <BsStarHalf />
        <BsStar />
      </span>
      <p className="text-gray-600">rating here</p>
    </>
  );
};
export default ProductRating;
