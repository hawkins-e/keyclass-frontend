import React from "react"
import ChallengesList from "./ChallengesList"
import Users from "./UsersContainer"
import TypingTest from "./pages/TypingTest"
import Timer from "./Timer"
import Photos from "./PhotoItem"
import PhotoContainer from "./PhotoContainer"
// import Typing from "./Typing"

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
            currentIdx:0, 
            input: '',
            timer: 0,
            startedTest: false,

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
                // selectedChallengeBlurb: this.state.selectedChallenge.learning_blurb 
            })
        }
        
        // calculateNumWords = () => {
        //     // console.log("I made it here!")
        //     const numWords = this.state.selectedChallenge.learning_blurb.trim().split(/\s+/).length;
        //     this.setState({ numWords });
        // }

        checkInput = (e) => {
            const letter = e.target.value[e.target.value.length - 1]
            if (letter === this.state.selectedChallenge.learning_blurb[this.state.currentIdx]) {
              this.setState((prevState) => ({
                input: prevState.input + letter,
                currentIdx: prevState.currentIdx + 1
              }))
            }
          }

          handleTimerStart = (e) => {
              const input = e.target.value 
              const textEntered = input !== ''
              let startedTest = true 
              
              if (this.state.selectedChallenge.learning_blurb === input) {
                startedTest = true;
              }

              this.setState({input, textEntered, startedTest})

            }

        //   getFinalTime = (finalTime) => {
        //     const wpm = Number.parseFloat((60 / finalTime) * this.state.numWords).toFixed(1);
        //     this.setState({wpm, finalTime});
        //   }
        

        //   reset = (e) => {
        //     this.setState({ 
        //       input: "", 
        //       textEntered: false,
        //       finished: false,
        //       finalTime: null,
        //       wpm: 0,
        //       statusClass: ""
        //     });
        //     // return focus to input
        //   }
        
        
    render() {
        // console.log("challenges... ", this.state.challengesArray)
        return (
            <div>
                {/* <ChallengesList
                 challengesArray={this.state.challengesArray}/> */}
                <Users />
                <PhotoContainer
                challengesArray={this.state.challengesArray}
                /> 
                <TypingTest
                challenges={this.state.challengesArray} 
                selectedChallengeName={this.state.selectedChallengeName}
                selectChallenge={this.selectChallenge}
                selectedChallenge={this.state.selectedChallenge || {}} 
                checkInput={this.checkInput}
                calculateNumWords={this.calculateNumWords}
                numWords={this.state.numWords} />

                {/* <Typing /> */}
            </div>

        )
    }
}



export default ChallengesContainer