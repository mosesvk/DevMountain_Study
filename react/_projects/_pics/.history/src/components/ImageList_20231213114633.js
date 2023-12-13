import React from 'react';
import Image from './ImageSingle';


const ImageList = ({ images }) => {
    console.log('images', images);
    return (
        <div className="grid grid-cols-3 gap-4 my-5">
            {images.map((image, index) => (
                <Image key={index} image={image} />
                
            ))}
        </div>
    );
};

export default ImageList;