import React from 'react';

const SeekerDetails = ({match}) => {
    const {username} = match.params
    return(
        <div>
            <h1>{username}</h1>
        </div>
    )
}

export default SeekerDetails;