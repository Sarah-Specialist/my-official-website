import React from 'react';
import photo from './photo.png';

export default function Profile() {
    return (
        <>
        <img src={photo} 
            alt="profile photo"
            height="200" width="200"
            style={{backgroundColor: "inherit"}} />
        </>
    )
}

