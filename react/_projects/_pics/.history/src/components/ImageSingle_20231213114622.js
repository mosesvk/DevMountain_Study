import React from 'react'
 
const Image = ({image}) => {
  return (
    <img src={image.urls.thumb} alt="" className="w-full h-auto cursor-pointer opacity-75 hover:opacity-100" />
  )
}

export default ImageSingle