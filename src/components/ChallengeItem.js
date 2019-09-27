import React from 'react'

const ChallengeItem = (props) => (
    // console.log(props)
    <div> 
    <h2>{props.challenge.challenge_name}</h2>
    <h3>{props.challenge.learning_blurb}</h3>
    <img src ={props.challenge.challenge_photo_url} alt={"boohoo"} />
    </div> 
)
export default ChallengeItem 