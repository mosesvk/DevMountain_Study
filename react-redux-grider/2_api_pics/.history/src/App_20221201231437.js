import { useState } from 'react';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import searchImages from './api';

const App = () => {
  const [images, setImages] = useState([]);

  const handleSubmit = async (searchTerm) => {
    // console.log('hit', searchTerm)
    const data = await searchImages(searchTerm);
    setImages(data)
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
};

export default App;
