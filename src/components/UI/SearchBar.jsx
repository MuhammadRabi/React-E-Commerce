import { useEffect } from "react"
import productStore from "../../Features/productStore"

const SearchBar = () => {
  const setSearchQuery = productStore((state) => state.setSearchQuery)
  const searchQuery = productStore((state) => state.searchQuery)

  useEffect(() => {
    setSearchQuery(searchQuery)
  }, [searchQuery])

  return (
    <form onSubmit={(e) => e.preventDefault()} className="text-center">
      <input
        className="w-full mx-auto p-2 rounded-md border"
        name="search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="find your product!"
      />
    </form>
  )
}

export default SearchBar
