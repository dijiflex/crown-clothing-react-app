

import React from 'react';
import './menu-item.styles.scss'

const MenuItem = ({title, imageUrl, size}) => (
    <div
    style={{
        backgroundImage: `url(${imageUrl})`
    }}
    className={`${size} menu-item`}
    >
        <div className="content">
        <h1 className="title">{title}</h1>
        <div className="sutitle">SHOP NOW</div>
        </div>
    </div>
);

export default MenuItem;