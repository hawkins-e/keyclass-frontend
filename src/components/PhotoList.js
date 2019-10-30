import React from 'react'
import PhotoItem from './PhotoItem'

const PhotoList = (props) => {
    return (
        <ul>
            {props.challengesArray.map(photo =>
                <PhotoItem key={photo.challenge_photo_url} photo={photo}/>
            )}
        </ul>
    )
}
   
export default PhotoList 