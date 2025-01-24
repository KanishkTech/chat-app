import React from 'react'

const SearchSection = () => {
  return (
    <div className="relative flex w-full items-center">
    <input
      type="text"
      placeholder="Search...."
      className="w-full  px-3 py-2 outline-none border rounded-lg"
    />
    <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
      🔍
      {/* Replace with an actual icon library like Font Awesome or Material Icons */}
    </span>
  </div>
  )
}

export default SearchSection