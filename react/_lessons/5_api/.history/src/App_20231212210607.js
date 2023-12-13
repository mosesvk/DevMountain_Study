import React, { useState } from 'react';
import './App.css';
import searchImages from './api';
import ImageList from './components/ImageList';
import SearchBar from './components/SearchBar';


function App() {
  const [images, setImages] = useState([]);
  
  const clickHandler = async (input) => {
    const newImages = await searchImages(input)

    setImages(newImages)
  }

  return (
    <>
      <SearchBar clickHandler={clickHandler}/>
      <ImageList images={images}/>
    </>
  );
}

export default App;
