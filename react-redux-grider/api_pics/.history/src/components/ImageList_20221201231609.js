import React from 'react'
import ImageShow from './ImageShow'


const ImageList = ({images}) => {
  
  const renderedImages = images.map((img, idx) => (
    <ImageShow /> 
  ))

  return (
    <div>

    </div>
  )
}

export default ImageList