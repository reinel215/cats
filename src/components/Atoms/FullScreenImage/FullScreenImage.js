import React from 'react'
import { Image, Icon } from 'semantic-ui-react'

import "./FullScreenImage.scss"

const FullScreenImage = ({ imageURL = "", onCompress, open = false }) => {


    if (!open) return null;

    return (
        <div className="full-screen-image">


            <div className="content-wrapper" >

                <div className="fullscreen-image-wrapper" >
                    <Image src={imageURL} wrapped ui={false} />
                    <Icon onClick={onCompress} className="compress-icon" size="big" name="compress" link />

                </div>

            </div>


        </div>
    )
}

export default FullScreenImage
