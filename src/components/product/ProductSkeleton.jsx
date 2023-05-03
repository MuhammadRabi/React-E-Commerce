import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductSkeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((_, i) => {
      return (
        <article key={i} className="flex flex-col space-y-1">
          <Skeleton height={175} />
          <div className="mx-auto mt-4">
            <Skeleton width={200} />
          </div>
          <Skeleton />
          <Skeleton />
          <div className="mx-auto">
            <Skeleton width={100} />
            <Skeleton width={100} />
          </div>
        </article>
      );
    });
};
export default ProductSkeleton;
