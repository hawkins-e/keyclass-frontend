import React from 'react'

const challengeChoice = challenge.options[challenge.name[0]].value;


class ChallengeFilter extends React.Component {
  render() {
    return (
      <div className="ui form">
        <h3> Challenges </h3>
        <div className="field">
          <select name="type" id="type" onChange={(event) => this.props.onChangeType(event.target.value) }>
            <option value="all">All</option>
            <option value="Challenge 1">Challenge 1</option>
            <option value="Challenge 2">Challenge 2</option>
            <option value="Challenge 3">Challenge 3</option>
          </select>
        </div>

        <div className="field">
          <button onClick={this.props.onFindPetsClick} className="ui secondary button">Find pets</button>
        </div>
      </div>
    )
  }
}

export default ChallengeFilter