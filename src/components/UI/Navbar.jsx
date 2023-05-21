import { Link, NavLink } from "react-router-dom";
import CartIcon from "../cart/CartIcon";
import { MdMenu } from "react-icons/md";
import Login from "../auth/Login";
import { modalStore } from "../../Features/modalStore";
const Navbar = () => {
  const openSidebar = modalStore((state) => state.openSidebar);
  return (
    <>
      <nav className="flex items-center justify-between px-10 py-3 font-bold text-white capitalize bg-main">
        <h3 className="px-4 text-xl md:text-2xl">
          <Link to="/">LOGO</Link>
        </h3>
        <ul className="justify-center flex-1 hidden space-x-4 lg:flex">
          <li>
            <NavLink to="/" className="p-2 rounded-md">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className="p-2 rounded-md">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="p-2 rounded-md">
              About
            </NavLink>
          </li>
        </ul>
        <div className="flex">
          <CartIcon />
          <Login />
          <span className="block ml-4 text-5xl cursor-pointer lg:hidden">
            <MdMenu onClick={() => openSidebar()} />
          </span>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
