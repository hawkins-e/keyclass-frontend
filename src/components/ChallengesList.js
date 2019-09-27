import React from 'react'
import ChallengeItem from './ChallengeItem'


const ChallengesList = (props) => {
    return (
        <ul>
            {props.challengesArray.map(challenge =>
                <ChallengeItem key={challenge.id} challenge={challenge}/>
            )}
        </ul>
    )
}

export default ChallengesList
