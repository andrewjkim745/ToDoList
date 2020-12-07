import React from 'react' 



export const Title = ({ title, className , color, size, alignment, transformation, weight, fontFamily  }) => {
    return (
        <h1 className={`title ${className} has-text-${color} is-size-${size} has-text-${alignment} is-${transformation} has-text-weight-${weight} is-family-${fontFamily}`}>
            {title}
        </h1>
    )
}
