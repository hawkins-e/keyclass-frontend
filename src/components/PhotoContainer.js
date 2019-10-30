import React from 'react'
import PhotoCard from "./PhotoCard"
 
const PhotoContainer = (props) => {
    return(
    <div>
    <br/>
    <PhotoCard challenge_photo={props.challenge.challenge_photo_url} displayContent={props.displayContent}/>
    </div>
    )   
}

export default PhotoContainer 




