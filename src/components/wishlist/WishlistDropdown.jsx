import React, { useEffect } from "react";
import { useWishlistStore } from "../../Features/wishlistStore";
import { FaHeart } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const WishlistDropdown = () => {
  const wishlistItems = useWishlistStore((state) => state.wishlist);
  const clearWishlist = useWishlistStore((state) => state.clearWishlist);
  const isWishlistOpen = useWishlistStore((state) => state.isWishlistOpen);
  const closeWishlist = useWishlistStore((state) => state.closeWishlist);
  const removeFromWishlist = useWishlistStore(
    (state) => state.removeFromWishlist
  );

  //closing wishlist when navigate to another route

  const { pathname } = useLocation();
  useEffect(() => {
    closeWishlist();
  }, [pathname]);

  return (
    <>
      {isWishlistOpen && (
        <article
          className={
            "absolute z-30 flex flex-col justify-between w-64 p-4 py-8 text-gray-800 duration-1000 hover:translate-x-10 rounded-md right-48 top-12 bg-slate-100"
          }
        >
          <h2 className="mb-6">wishlist ({wishlistItems.length})</h2>
          {wishlistItems.length > 0 ? (
            <ul className="flex flex-col space-y-5">
              {wishlistItems.map((item) => (
                <li
                  className="text-sm border-b-2 border-b-gray-300"
                  key={item.id}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex flex-col justify-center py-4 space-y-4 text-center border rounded-md bg-slate-50 border-slate-200 item-center">
              <p>there is no items in your wishlist!</p>
              <FaHeart className="mx-auto text-6xl text-slate-400 opacity-20" />
            </div>
          )}

          {wishlistItems.length != 0 && (
            <button
              className="px-2 py-1 mx-auto mt-4 text-sm text-center text-white capitalize duration-300 rounded-md cursor-pointer hover:scale-105 w-fit bg-main"
              onClick={() => clearWishlist()}
              type="clear"
            >
              clear wishlist
            </button>
          )}
        </article>
      )}
    </>
  );
};

export default WishlistDropdown;
