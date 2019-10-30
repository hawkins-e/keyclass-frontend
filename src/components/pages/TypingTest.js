import React from "react";
import {Header, Button} from "semantic-ui-react"

class TypingTest extends React.Component {
  
  render() {
    console.log("PROPS... ", this.props);
    return (
      <div className="App" style={{top:"60pxd",left: "0px", right:"200px"}}>
        <Header size= "medium">Words Per Minute: {this.props.wordsPerMinute}</Header>
              <br />
              <span>
        <Header size= "medium">Time Remaining: {this.props.timer}</Header>
              </span>
          <br/>
          <form>
            <label><strong>
             Choose a Challenge: 
          <select
            className = "ui fluid selection dropdown"
            value={this.props.challenge_name}
            onChange={e => {
              this.props.selectChallenge(e);
            }}
           >
            {this.props.challenges.map(challenge => {
              return (
                <option
                  key={challenge.challenge_name}
                  value={challenge.challenge_name}
                >
                  {challenge["challenge_name"]}
                </option>
              );
            })}
          </select>
          </strong>
            </label> 
          </form>
        
          <br />
          <br />
          <Header as="h3">{this.props.selectedChallenge.learning_blurb}</Header>
          <form className="ui form" onSubmit={this.props.handleSubmit}>
            <textarea 
              placeholder = "Start Typing Here..."
              rows="3"
              className="ui form"
              onChange={e => this.props.checkInput(e)}
              value={this.props.input}
            />
             <br />
             <br />
             <Button className="ui button" floated="left" input type="submit"  value="Submit"> submit </Button>
          </form>
          <br/>
          <Button color="blue" size="big" button floated="right" button onClick={this.props.letsPlayAgain}>
            Let's Play Again!
          </Button>
      </div>
    );
  }
}

export default TypingTest;
