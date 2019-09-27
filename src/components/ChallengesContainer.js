import React from "react"
import ChallengesList from "./ChallengesList"
import Users from "./UsersContainer"
import TypingTest from "./TypingTest"



const URL = "http://localhost:3000/challenges"

class ChallengesContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            challengesArray: [],
            selectedChallengeName: '', 
            selectedChallenge: {},
            numWords: 0, 
            wpm: 0,
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
    
    selectChallenge =(event)=> {
            console.log("event...", event)
            this.setState({
                selectedChallengeName: event.target.value,
                selectedChallenge: this.state.challengesArray.find((challenge) => {
                    return challenge.challenge_name === event.target.value
                }),
                selectedChallengeBlurb: this.state.selectedChallenge.learning_blurb 
            })
        }
        
        calculateNumWords = (selectedChallengeBlurb) => {
            console.log(selectedChallengeBlurb)
            const numWords = this.state.selectedChallengeBlurb.trim().split(/\s+/).length;
            this.setState({ numWords });
        }
        
        
    render() {
        console.log("challenges... ", this.state.challengesArray)
        return (
            <div>
                <ChallengesList
                 challengesArray={this.state.challengesArray}/>
                <Users />
                <TypingTest
                challenges={this.state.challengesArray} 
                selectedChallengeName={this.state.selectedChallengeName}
                selectChallenge={this.selectChallenge}
                selectedChallenge={this.state.selectedChallenge || {}} 
                calculateNumWords={this.state.calculateNumWords} />
            </div>

        )
    }
}



export default ChallengesContainer