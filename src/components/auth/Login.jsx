import { FaUser } from "react-icons/fa"
import { useAuth0 } from "@auth0/auth0-react"

const Login = () => {
  const { loginWithRedirect } = useAuth0()
  return (
    <button
      className="flex items-center cursor-pointer"
      aria-label="login-button"
      onClick={() => loginWithRedirect()}
    >
      <FaUser className="text-2xl" />
    </button>
  )
}

export default Login
