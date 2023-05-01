import { ToastContainer } from "react-toastify";

const Layout = ({ children }) => {
  return (
    <>
      <main className="py-6 md:py-12 px-2.5 md:px-6 lg:px-24 xl:px-36">
        {children}
      </main>
    </>
  );
};
export default Layout;
