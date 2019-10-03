import React from "react";
import { Select } from "semantic-ui-react";

function challengeOptions(props){
    console.log(props)
    return
  key={props.challenge_name}, value={props.selectedChallengeName}, text: "Monkeyin' Around" },
  { key: "challenge.challenge_name", value: "challenge.challenge_name", text: "King of the Jungle"},
  { key: "challenge.challenge_name", value: "challenge.challenge_name", text: "Got Milk?" }

  
    const SelectButton = () => (
    <Select placeholder="Select your challenge" options={challengeOptions}/>
    
    <div
    value={this.props.selectedChallengeName}
                onChange={props.selectChallenge}
                name="selectedChallenge"
        >
                {props.challenges.map(challenge => {
                return (
                    <option
                    key={challenge.challenge_name}
                    value={challenge.challenge_name}
                    >
                    {challenge["challenge_name"]}
                    </option>
                );
                }
                )}
    </div>
    )
}
export default SelectButton 