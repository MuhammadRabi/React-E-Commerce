import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const LoginFormTitle = () => {
  return (
    <Link to="/">
      <div className="flex text-2xl items-center mb-12 space-x-2">
        <h3 className="font-semibold">Store</h3>
        <FaShoppingCart className="text-teal-400 text-2xl" />
      </div>
    </Link>
  );
};
export default LoginFormTitle;
