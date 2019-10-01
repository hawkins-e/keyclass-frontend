import React from 'react'
import Timer from "./Timer"
import Instructions  from "./Instructions"

class TypingTest extends React.Component {
  renderContent = () => {
      if (this.props.startTimer) {
        return <Timer />
      } else {
          return < Instructions /> 
      }
  }
  
  render () {
    console.log("PROPS... ", this.props)
    return (
      <div className="App">
      <header className="App-header">
             <header>
            
                    <h4> Words per minute: <span wpm > 0 </span> <span>
                     Wordcount: {this.props.calculateNumWords} </span> 
                    <span></span> Errors: <span errors > 0 </span> <span> <span/> <Timer /> </span> </h4>
                
            </header>
        
      <label>Choose Your Challenge: </label>
      <br/>
                <select 
                    value={this.props.selectedChallengeName}
                    onChange={this.props.selectChallenge}
                    name="selectedChallenge"
                >
                    {
                        this.props.challenges.map((challenge) => {
                            return (<option key={challenge.challenge_name} value={challenge.challenge_name}>{challenge['challenge_name']}</option>)
                        })
                    }
                </select>
        <br/>
        <div>
          {this.props.selectedChallenge.learning_blurb}
        </div>
        <input type="text" onInput={this.props.startTimer} onChange={this.props.checkInput}/>
        {/* <input type="text" value={this.state.text} onChange="this.props.onChange(); this.handleChange();" /> */}

        
      </header>
    </div>
  );
}
}

export default TypingTest 









