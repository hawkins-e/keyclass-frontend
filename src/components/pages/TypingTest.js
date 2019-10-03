import React from "react";

class TypingTest extends React.Component {
  render() {
    console.log("PROPS... ", this.props);
    return (
      <div className="App">
        <header >
          <header>
            <h4>
              {" "}
              WORDS PER MINUTE: <span wpm>
                {" "}
                {this.props.wordsPerMinute}{" "}
              </span>{" "}
              <br />
              <span>
                TIME REMAINING: <span> {this.props.timer} </span>{" "}
              </span>
            </h4>
          </header>
          <label> Choose Your Challenge: </label>
          <br />
          <select
            value={this.props.selectedChallengeName}
            onChange={e => {
              this.props.selectChallenge(e);
            }}
            name="selectedChallenge"
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
          <br />
          <br />
          <label>{this.props.selectedChallenge.learning_blurb}</label>
          <form onSubmit={this.props.handleSubmit}>
            <input
              type="text"
              placeholder="start typing..."
              onChange={e => this.props.checkInput(e)}
              value={this.props.input}
            />
            <input type="submit" value="Submit" />
          </form>
          <button onClick={event => this.props.handleResetSubmit(event)}>
            Let's Play Again! 
          </button>
        </header>
      </div>
    );
  }
}

export default TypingTest;
