import React from 'react'
import './Search.scss'
// import SearchIcon from '../../assets/icons/search.svg'

const Search = () => {
  return (
    <>
      <input
        type='search'
        className='mb-7 border border-idea-indigo focus:outline-none focus:ring h-14 px-8 rounded-full text-lg w-full'
        placeholder='Поиск'
      />
    </>
  )
}

// в наш компонент App, с помощью connect(mapStateToProps)
export default Search
