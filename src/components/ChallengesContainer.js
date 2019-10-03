import React from "react";
import ChallengesList from "./ChallengesList";
import Users from "./UsersContainer";
import TypingTest from "./pages/TypingTest";
import Timer from "./Timer";
import Photos from "./PhotoItem";
import PhotoContainer from "./PhotoContainer";
import ReactDOM from "react-dom"
import PhotoCard from "./PhotoCard"

const ms = require("pretty-ms");

const URL = "http://localhost:3000/challenges";

class ChallengesContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      challengesArray: [],
      selectedChallengeName: "",
      selectedChallenge: {},
      currentIdx: 0,
      input: "",
      timer: 60,
      selectedChallengePhoto: [],
      selectChallengePhoto: [],
      wordsPerMinute:0
    };
    // this.checkEqual = this.checkEqual.bind(this)
  }

  componentDidMount() {
    fetch(URL)
      .then(response => response.json())
      .then(challenges => {
        this.setState({
          challengesArray: challenges
        });
      });
  }

  selectChallenge = event => {
    this.setState({
      selectedChallengeName: event.target.value,

      selectedChallenge: this.state.challengesArray.find(challenge => {
        return challenge.challenge_name === event.target.value;
      }),

      selectedChallengeBlurb: this.state.selectedChallenge.learning_blurb
    });
  };

  
    handleSubmit=(event)=>{
        event.preventDefault()
        window.clearInterval(this.interval)
        const wordsPerMinute= (this.state.selectedChallenge.learning_blurb.split(" ").length * (60/(60 - this.state.timer)))
        this.setState({
            wordsPerMinute: wordsPerMinute
        })
        alert( "You typed " + wordsPerMinute + " words per minute")
    }

    handleResetSubmit=()=>{
        this.setState({
            gameStarted: false,
            wordsPerMinute: 0, 
            timer: 60,
            input: " ",
            selectedChallenge: []
        })
        console.log(this.state)
    }

    updateTimer=()=>{
      let newTime = this.state.timer - 1;
      this.setState({
        timer: newTime
      })
      if(newTime === 0){
        window.clearInterval(this.interval);
      }
    }

    startGame = () => {
        this.setState({
            gameStarted: true, 
            wordsPerMinute: 0,
            timer: 60 
        })
        
        this.interval = setInterval(this.updateTimer, 1000)
    }
    

    
    checkInput = e => {
        if(
            !this.state.gameStarted
        ) {this.startGame()}

        const letter = e.target.value[e.target.value.length - 1];
        if (
            letter ===
            this.state.selectedChallenge.learning_blurb[this.state.currentIdx]
            ) {
                this.setState(prevState => ({
                    input: prevState.input + letter,
                    currentIdx: prevState.currentIdx + 1
                }));
            }
        };
        
        // //splits the challenge blurb into an array of words for the wordsMastered category
        // getChallengeBlurb = () => {
        // console.log("I MADE IT!");
        // const challengeBlurb = this.state.selectedChallenge.learning_blurb;
        // const splitChallengeBlurb = challengeBlurb.split(" ");
        // return splitChallengeBlurb
    

    render() {
    // console.log("challenges... ", this.state.challengesArray)
    return (
      <div>
        <div>
          <PhotoContainer
            challenge={this.state.selectedChallenge}
            selectChallenge={this.selectChallenge}
          />
        </div>

        <br />

        <br />

        <div>
          <TypingTest
            challenges={this.state.challengesArray}
            selectedChallengeName={this.state.selectedChallengeName}
            selectChallenge={this.selectChallenge}
            selectedChallenge={this.state.selectedChallenge || {}}
            checkInput={this.checkInput}
            wordsPerMinute={this.state.wordsPerMinute}
            input={this.state.input}
            handleTyping={this.handleTyping}
            getChallengeBlurb={this.getChallengeBlurb}
            startGame={this.startGame}
            timer={this.state.timer}
            handleSubmit={this.handleSubmit}
            handleResetSubmit={this.handleResetSubmit}
          />
        </div>
      </div>
    );
  }
}

export default ChallengesContainer;
