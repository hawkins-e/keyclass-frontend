import React from 'react';
import './App.css';
// import 'semantic-ui-css/semantic.min.css'
import ChallengesContainer from "./components/ChallengesContainer"


function App() {
  return (
    <div className="App">
      <header>
        <ChallengesContainer />
      </header>
    </div>
  );
}

export default App;
