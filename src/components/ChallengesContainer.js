import React from "react";
import TypingTest from "./pages/TypingTest";
import PhotoContainer from "./PhotoContainer";

const URL = "http://localhost:3000/challenges";

class ChallengesContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      challengesArray: [],
      selectedChallengeName: "Select A Challenge",
      selectedChallenge: {},
      currentIdx: 0,
      input: "",
      timer: 60,
      selectedChallengePhoto: [],
      selectChallengePhoto: [],
      wordsPerMinute:0,
      content: false,
      gameStarted: false,
      value: "Select A Challenge",
      gameId: 1
    };
    
  }

  displayContent = (e) => {
    e.preventDefault()
    this.setState({ content: !this.state.content })
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

  componentWillUnmount(){
    clearInterval(this.interval)
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
            wordsPerMinute: Math.round(wordsPerMinute)
        })
        alert( "You typed " + Math.round(wordsPerMinute) + " words per minute")
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

    render() {
    // console.log("challenges... ", this.state.challengesArray)
    return (
      <div>
        <div >
        
          <PhotoContainer
            challenge={this.state.selectedChallenge}
            selectChallenge={this.selectChallenge}
            />
           
        </div>

        <br />

        <br />

        <div>
          <TypingTest
            key={this.state.gameId}
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
            default={this.state.default}
            value={this.state.value}
            letsPlayAgain={this.props.letsPlayAgain}
          />
        </div>
      </div>
    );
  }
}

export default ChallengesContainer;
