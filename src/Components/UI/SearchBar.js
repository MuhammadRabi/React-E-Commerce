import React from "react"

const SearchBar = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="mt-2 text-center">
      {/*       <label htmlFor="search">search</label>
       */}{" "}
      <input
        className="lg:w-[450px] pl-4 p-2 outline-none rounded-md ml-2"
        type="text"
        name="text"
        placeholder="find your desired product!"
      />
      <button
        type="submit"
        className="bg-teal-700 text-white px-4 py-2 rounded-r-md duration-300 hover:bg-teal-600"
      >
        Search
      </button>
    </form>
  )
}

export default SearchBar
