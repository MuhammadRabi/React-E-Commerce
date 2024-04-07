import { useState } from "react"
import UserList from "./UserList"

const Avatar = ({ user: { picture } }) => {
  const [isListOpen, setIslistOpen] = useState(false)
  return (
    <div onClick={() => setIslistOpen((prev) => !prev)}>
      <img
        src={picture}
        alt="user-image"
        width={32}
        height={32}
        className="relative object-cover border-2 border-white rounded-md cursor-pointer"
      />
      {isListOpen && <UserList />}
    </div>
  )
}

export default Avatar
