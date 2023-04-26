import { Link, NavLink } from "react-router-dom";
import Cart from "../cart/Cart";
import { MdMenu } from "react-icons/md";
import Login from "../auth/Login";
const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between px-10 py-3 font-bold text-white capitalize bg-teal-600">
        <h3 className="px-4 text-xl md:text-2xl">
          <Link to="/">LOGO</Link>
        </h3>
        <ul className="justify-center flex-1 hidden space-x-6 lg:flex">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
        <Cart />
        <span className="block text-5xl cursor-pointer lg:hidden">
          <MdMenu />
        </span>
        <Login />
      </nav>
    </>
  );
};
export default Navbar;
