import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateFilter } from "../../Features/productSlice"

const SearchBar = () => {
  const dispatch = useDispatch()
  const { text } = useSelector((state) => state.products.filters)

  const handleFilter = (e) => {
    const { name, value } = e.target
    dispatch(updateFilter({ name, value }))
  }

  return (
    <form onSubmit={(e) => e.preventDefault()} className="text-center">
      <input
        className="w-full mx-auto p-2 rounded-md border"
        type="text"
        name="text"
        value={text}
        onChange={handleFilter}
        placeholder="find your product!"
      />
    </form>
  )
}

export default SearchBar
