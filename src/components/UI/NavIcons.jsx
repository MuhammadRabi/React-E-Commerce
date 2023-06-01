import React from "react";
import WishlistIcon from "../wishlist/WishlistIcon";
import CartIcon from "../cart/CartIcon";

const NavIcons = () => {
  return (
    <div className="hidden px-4 py-1 rounded-full cursor-pointer lg:block md:px-8">
      <div className="flex space-x-6 text-3xl duration-75">
        <WishlistIcon />
        <CartIcon />
      </div>
    </div>
  );
};

export default NavIcons;
