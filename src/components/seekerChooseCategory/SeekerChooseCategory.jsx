import React from 'react';
import './seekerChooseCategory.css'

const SeekerChooseCategory = ({name,value}) => {
    return(
        <div>
            <div className="category">
                <img src={value} alt="img"/>
                <p>{name}</p>
            </div>
        </div>
    )
}

export default SeekerChooseCategory;