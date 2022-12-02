import React from 'react'
import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList'
import searchImages from './api'

const App = () => {

  const handleSubmit = (searchTerm) => {
    searchImages(searchTerm)
  }

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList />
    </div>
  )
}

export default App