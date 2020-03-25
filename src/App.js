import React from 'react'
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar";
import ChallengesContainer from "./components/ChallengesContainer";
import "./App.css";

class App extends React.Component {
  state = {
    gameId: 1
  };

  resetGame = () =>
    this.setState(prevState => ({
      gameId: prevState.gameId + 1
    }));

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar
            color="blue"
            title="KeyClass"

          />

          <div style={{ padding: "10%" }} className="ui container grid">
            <div id="content" className="sixteen wide column"></div>

            <ChallengesContainer
              key={this.state.gameId}
              letsPlayAgain={this.resetGame}
            />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
