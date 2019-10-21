
import React from 'react'
import { Image } from 'semantic-ui-react'
import PhotoCard from "./PhotoCard"
import PhotoAnimation from "./PhotoAnimation"
import {Spring} from 'react-spring/renderprops'
import styled from "styled-components" 

const PhotoContainer = (props) => {
    return(
    <div>
    <br/>
    <PhotoCard challenge_photo={props.challenge.challenge_photo_url} displayContent={props.displayContent}/>
    </div>
    )   
}

export default PhotoContainer 




