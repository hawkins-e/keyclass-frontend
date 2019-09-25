import React from "react"
import ChallengesList from "./ChallengesList"
import Users from "./UsersContainer"



const URL = "http://localhost:3000/challenges"

class ChallengesContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            challengesArray: [],
            selected: null 
        }
    }

    componentDidMount() {
        fetch(URL)
            .then(response => response.json())
            .then(challenges => {
                    this.setState({
                    challengesArray: challenges
                })

            })
        
    }

    render() {
        console.log(this.state.challengesArray)
        return (
            <div>

                <ChallengesList
                    challengesArray={this.state.challengesArray}
                />
                <Users />

            </div>

        )
    }
}



export default ChallengesContainer