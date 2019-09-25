import React from "react"
import ChallengesList from "./ChallengesList"

const URL= "http://localhost:3000/challenges"

class ChallengesContainer extends React.Component {
    constructor(){
        super()
        this.state = {
            challengesArray: [],
        }
    }

    componentDidMount(){
        this.fetchChallenges()
    }

    fetchChallenges = () => {
        fetch(URL)
        .then(response => response.json())
        .then(challenges => {
            this.setState({
                challengesArray: challenges
            })
        })
        .catch(alert)
    } 
    
    render(){
        return(
        <div> 
        
        <ChallengesList
        challengesArray={this.state.challengesArray}
        />

        </div>

        )
    }
}



export default ChallengesContainer