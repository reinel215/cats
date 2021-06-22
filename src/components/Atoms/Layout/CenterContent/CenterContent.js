import React from 'react';

import "./CenterContent.scss";

const CenterContent = ({children, ...props}) => {
    return (
        <div {...props} className="center-content" >
            { children }
        </div>
    )
}

export default CenterContent;
