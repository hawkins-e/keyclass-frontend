import React from 'react'

class TypingTest extends React.Component {

    checkInput = (e) => {
        const letter = e.target.value[e.target.value.length - 1]
        if (letter === this.state.test[this.state.currentIdx]) {
            this.setState((prevState) => ({
                input: prevState.input + letter,
                currentIdx: prevState.currentIdx + 1
            }))
        }
    }

render() {
    console.log("PROPS... ", this.props)
    return (
        <div className="App">
            <header className="App-header">
                <label>Choose Your Challenge: </label>
                <br />
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
                <br />
                <div>
                    {this.props.selectedChallenge.learning_blurb}
                </div>
                <input onChange={this.checkInput} type="text"></input>

            </header>
        </div>
    );
}
}


export default TypingTest









