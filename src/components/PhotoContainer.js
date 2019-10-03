
import React from 'react'
import { Card } from 'semantic-ui-react'
import PhotoCard from "./PhotoCard"
import PhotoAnimation from "./PhotoAnimation"

const PhotoContainer = (props) => {
    console.log(props)
    return(
        <PhotoCard challenge_photo={props.challenge.challenge_photo_url} />
     )    
}

export default PhotoContainer 




