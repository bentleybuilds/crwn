import React from 'react'
import './menuItem.styles.scss'

const MenuItem = ({title, imageUrl, size}) => (
    <div 
        className={`${size} menu-item`} 
        style={
            {
                backgroundImage:`url(${imageUrl})`,
                backgroundPosition:'center',
                backgroundSize: 'cover'           
            }
        }
    >
        <div className="content">
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
)

export default MenuItem