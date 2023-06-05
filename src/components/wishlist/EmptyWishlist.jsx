import React from "react";
import { FaHeart } from "react-icons/fa";

const EmptyWishlist = () => {
  return (
    <div className="flex flex-col justify-center py-4 space-y-4 text-center border rounded-md bg-slate-50 border-slate-200 item-center">
      <p className="text-slate-700">there is no items in your wishlist!</p>
      <FaHeart className="mx-auto text-6xl text-slate-400 opacity-20" />
    </div>
  );
};

export default EmptyWishlist;
