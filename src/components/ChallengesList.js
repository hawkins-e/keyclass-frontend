import React from 'react'
import ChallengeItem from './ChallengeItem'

const ChallengesList = (props) => {
    return (
        <ul class="ui selection dropdown">
            {/* <h1>Select A Challenge</h1> */}
            {props.challengesArray.map(challenge =>
                <ChallengeItem key={challenge.id} challenge={challenge}/>
            )}
        </ul>
    )
}
   
export default ChallengesList
