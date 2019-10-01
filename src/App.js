import React from 'react';
import {BrowserRouter, Switch, Route, Link } from "react-router-dom"
import Navbar from "./components/Navbar"
import LoginPage from "./components/pages/LoginPage"
import TypingTest from "./components/pages/TypingTest"
import UserPage from "./components/pages/UserPage"
import ChallengesContainer from './components/ChallengesContainer'


class App extends React.Component {
  
  render(){
    return(
      <BrowserRouter>
      <div>
        <Navbar
            color="green"
            title="KeyClass"
            description="let's type!"
            icon="keyboard outline"/>

        <div className="ui container grid">
          <div id="content" className="sixteen wide column"></div>
         
          <Switch>
            <Route path="/" exact component={LoginPage} />
            <Route path="/:id" component={UserPage} />
            <Route path="/typingtest" component={TypingTest} />
          </Switch>
        </div>
      </div>
      </BrowserRouter>
  )
 }
  
}


export default App;
