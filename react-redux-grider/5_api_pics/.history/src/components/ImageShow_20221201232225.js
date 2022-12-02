import React from 'react'

const ImageShow = ({img}) => {
  return (
    <div>
      <img src={img.urls.small} alt={img.id}/>
    </div>
  )
}

export default ImageShow