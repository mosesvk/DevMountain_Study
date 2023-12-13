import React from 'react';
import Image from './ImageSingle';


const ImageList = ({ images }) => {

    const renderedImages = images.map((image) => { 
        return <Image key={image.id} image={image} />
    }
    );

    return (
        <div className="grid grid-cols-3 gap-4">
            {renderedImages}
        </div>
    );
};

export default ImageList;