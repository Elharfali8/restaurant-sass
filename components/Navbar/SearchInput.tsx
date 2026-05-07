import { Search } from 'lucide-react'
import React from 'react'

const SearchInput = () => {
  return (
      <div className='w-full relative max-w-100'>
    <input
        type='text'
              className='bg-white border border-gray-300 w-full h-10 shadow-md rounded-xl pl-10'
              placeholder='Search for anything...'
    />

    <button className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-600'>
        <Search size={18} />
    </button>
</div>
  )
}

export default SearchInput