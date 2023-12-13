import React from 'react';

const ImageList = ({ images }) => {
    return (
        <div>
            {images.map((image, index) => (
                <img key={index} src={image} alt="" />
            ))}
        </div>
    );
};

export default ImageList;