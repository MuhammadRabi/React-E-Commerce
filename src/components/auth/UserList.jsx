import { useAuth0 } from "@auth0/auth0-react"
import Logout from "./Logout"
import { FaUser } from "react-icons/fa"

const UserList = () => {
  const { user } = useAuth0()
  return (
    <article className="absolute z-10 flex flex-col p-4 space-y-2 text-sm font-normal rounded-md top-14 right-4 bg-slate-100 text-slate-500">
      <div className="flex items-center justify-between py-1 space-x-2">
        <img
          src={user.picture}
          width={32}
          height={32}
          className="rounded-full"
          alt={user.name}
        />
        <p>{user.email}</p>
      </div>
      <hr className="border border-slate-300" />
      <div className="flex items-center py-1 space-x-2 duration-300 rounded-md cursor-pointer hover:bg-slate-200">
        <FaUser className="text-2xl" />
        <p>{user.name}</p>
      </div>
      <hr className="border border-slate-300" />
      <Logout />
    </article>
  )
}

export default UserList
