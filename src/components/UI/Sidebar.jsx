import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaRegWindowClose } from "react-icons/fa";
import { modalStore } from "../../Features/modalStore";

const Sidebar = () => {
  const isSidebarOpen = modalStore((state) => state.isSidebarOpen);
  const closeSidebar = modalStore((state) => state.closeSidebar);

  const { pathname } = useLocation();

  useEffect(() => {
    closeSidebar();
  }, [pathname]);

  const navLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "#00897B" : "",
    };
  };
  return (
    <nav
      className={`fixed top-0 ${
        isSidebarOpen ? "right-0" : "-right-full"
      } z-50 flex items-center justify-center w-full md:w-1/2 lg:hidden duration-500 h-full bg-white text-slate-900`}
    >
      <div className="absolute top-6 right-12 menu-toggle">
        <FaRegWindowClose
          className="text-3xl cursor-pointer"
          onClick={() => closeSidebar()}
        />
      </div>
      <ul className="flex flex-col items-center justify-around space-y-6 text-3xl">
        <li className="font-semibold duration-300 text-slate-600 hover:translate-x-2">
          <NavLink style={navLinkStyle} to="/">
            Home
          </NavLink>
        </li>
        <li className="font-semibold duration-300 text-slate-600 hover:translate-x-2">
          <NavLink style={navLinkStyle} to="/products">
            Products
          </NavLink>
        </li>
        <li className="font-semibold duration-300 text-slate-600 hover:translate-x-2">
          <NavLink style={navLinkStyle} to="/about">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Sidebar;
