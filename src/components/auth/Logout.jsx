import { useAuth0 } from "@auth0/auth0-react"
import { FaSignOutAlt } from "react-icons/fa"
const Logout = () => {
  const { logout } = useAuth0()
  return (
    <button
      className="flex items-center py-1 space-x-2 duration-300 rounded-md cursor-pointer hover:bg-slate-200"
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      <FaSignOutAlt className="text-2xl" />
      <p>Logout</p>
    </button>
  )
}

export default Logout
