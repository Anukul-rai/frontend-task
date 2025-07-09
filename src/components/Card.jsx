import React from "react";

function Card({ image, alt }) {
    return (
        <img
        src={image}
        alt={alt}
        className="w-20 h-20 rounded-xl object-cover shadow-md hover:scale-105 transition-transform duration-300"
        />
    );
}

export default Card;
