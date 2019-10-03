import React from 'react'
import { Image } from 'semantic-ui-react'
import {Spring} from 'react-spring/renderprops'
// import "./styles.css"
import PhotoAnimation from "./PhotoAnimation"


const PhotoCard = (props) => {

    return (
        <Image>
        photoData={<img src={props.challenge_photo} alt={"boohoo"}  class="ui huge image"  />}
        </Image>
     
    );

}

export default PhotoCard 