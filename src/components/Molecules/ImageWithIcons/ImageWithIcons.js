import React from 'react';
import { Image } from 'semantic-ui-react';

import "./ImageWithIcons.scss";

const ImageWithIcons = ({ imageURL, children }) => {

    return (
        <div className="image-with-icons-wrapper" >
            <Image className="image" src={imageURL} wrapped ui={false} />

            <div className="icons-wrapper" >
                {children}
            </div>
        </div>
    )
}

export default ImageWithIcons
