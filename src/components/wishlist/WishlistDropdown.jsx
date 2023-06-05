import { useEffect } from "react";
import { useWishlistStore } from "../../Features/wishlistStore";
import { useLocation } from "react-router-dom";
import EmptyWishlist from "./EmptyWishlist";
import WishItem from "./WishItem";

const WishlistDropdown = () => {
  const wishlistItems = useWishlistStore((state) => state.wishlist);
  const clearWishlist = useWishlistStore((state) => state.clearWishlist);
  const isWishlistOpen = useWishlistStore((state) => state.isWishlistOpen);
  const closeWishlist = useWishlistStore((state) => state.closeWishlist);
  const removeFromWishlist = useWishlistStore(
    (state) => state.removeFromWishlist
  );

  //closing wishlist when visiting anotehr page

  const { pathname } = useLocation();
  useEffect(() => {
    closeWishlist();
  }, [pathname]);

  return (
    <article
      className={`absolute z-30 flex w-64 top-12 flex-col justify-between ${
        !isWishlistOpen ? "opacity-0" : ""
      } p-4 py-8 text-gray-800 duration-700 rounded-md right-48 bg-slate-100`}
    >
      <h2 className="mb-6">wishlist ({wishlistItems.length})</h2>
      {wishlistItems.length > 0 ? (
        <ul className="flex flex-col space-y-5">
          {wishlistItems.map((item) => (
            <WishItem key={item.id} {...item} />
          ))}
        </ul>
      ) : (
        <EmptyWishlist />
      )}

      {wishlistItems.length != 0 && (
        <button
          className="px-2 py-1 mx-auto mt-4 text-sm text-center text-white capitalize duration-300 rounded-md cursor-pointer hover:scale-105 w-fit bg-main"
          onClick={() => clearWishlist()}
          type="clear"
          aria-label="clear-wishlist"
        >
          clear wishlist
        </button>
      )}
    </article>
  );
};

export default WishlistDropdown;
