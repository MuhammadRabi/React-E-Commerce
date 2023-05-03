import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductDetailsSkeleton = () => {
  return (
    <article className="grid items-center justify-center grid-cols-1 mt-6 md:grid-cols-2">
      <Skeleton width={600} height={400} />
      <div className="flex flex-col space-y-2">
        <Skeleton width={250} />
        <Skeleton count={3} width={100} />
        <Skeleton count={6} />
        <Skeleton count={3} width={200} />
        <hr />
        <Skeleton height={40} width={200} />
      </div>
    </article>
  );
};
export default ProductDetailsSkeleton;
