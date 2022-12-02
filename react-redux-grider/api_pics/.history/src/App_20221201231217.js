import {useState} from 'react'
import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList'
import searchImages from './api'

const App = () => {
  const [images, setImages] = useState([])

  const handleSubmit = (searchTerm) => {
    // console.log('hit', searchTerm)
    setImages(searchImages(searchTerm))
  }

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  )
}

export default App