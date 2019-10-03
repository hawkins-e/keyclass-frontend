import React from 'react'

const ChallengeItem = (props) => (
   
    <div> 
    <h1>{props.challenge.challenge_name}</h1>
    <img src ={props.challenge.challenge_photo_url} alt={"boohoo"} />
    </div> 
)
export default ChallengeItem