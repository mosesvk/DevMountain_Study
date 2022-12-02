import React from 'react'
import ImageShow from './ImageShow'


const ImageList = ({images}) => {
  
  const renderedImages = images.map((img) => (
    <ImageShow key={img.id} img={img}  /> 
  ))

  return (
    <>
      {renderedImages}
    </>
  )
}

export default ImageList