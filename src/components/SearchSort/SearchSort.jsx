import React from 'react'

const SearchSort = ({searchQuery, setSearchQuery, sortOrder, setSortOrder }) => {
  return (
    <div className='flex items-center justify-center gap-2'>
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className='p-1 rounded-md'
        />
        <select
          value={sortOrder}
          onChange={e => setSortOrder(e.target.value)}
          className='p-1 rounded-md'
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
  )
}

export default SearchSort