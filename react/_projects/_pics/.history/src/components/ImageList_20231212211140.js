import React from 'react';


const ImageList = ({ images }) => {
    console.log('images', images);
    return (
        <div className="grid grid-cols-3 gap-4">
            {images.map((image, index) => (
                <img key={index} src={image.urls.small} alt="" className="w-full h-auto" />
            ))}
        </div>
    );
};

export default ImageList;