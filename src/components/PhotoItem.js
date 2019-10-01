import React from 'react'

const PhotoItem = (props) => (
   
    <div> 
    {console.log(props)}
    <img src ={props.photo.challenge_photo_url} alt={"boohoo"} />
    </div> 
)
export default PhotoItem
