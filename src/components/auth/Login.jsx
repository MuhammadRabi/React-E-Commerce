import { Link } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
const Login = () => {
  return (
    <div className="flex items-center justify-between space-x-2 cursor-pointer ">
      <FaSignInAlt className="text-xl" />
      <Link to="auth">
        <p>login </p>
      </Link>
    </div>
  );
};

export default Login;
