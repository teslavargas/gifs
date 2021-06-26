import React from 'react'
import PropTypes from 'prop-types';

export const GifGridItem = ({title, url}) => {

    return (
        <div className="card animate__animated animate__rubberBand">
            <img src={url} alt={title}/>
            <p className="titulo">{title}</p> 
        </div>
    )
}

GifGridItem.protoTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired

}