import React from 'react'
import { Dropdown } from 'semantic-ui-react'

export class ChallengeDropdown extends React.Component<Props, State>{
  render() {
    return (
      <div>
         I am Challenge Dropdown 
      </div>
    );
  };
};
// const addressDefinitions = faker.definitions.address
// const stateOptions = _.map(addressDefinitions.state, (state, index) => ({
//   key: addressDefinitions.state_abbr[index],
//   text: state,
//   value: addressDefinitions.state_abbr[index],
// }))

// const DropdownExampleSearchSelectionTwo = () => (
//   <Dropdown placeholder='State' search selection options={stateOptions} />
// )

// const challengeOptions = {this.props.selectedChallengeName}
// const stateOptions = _.map(addressDefinitions.state, (state, index) => ({
//   key: addressDefinitions.state_abbr[index],
//   text: state,
//   value: addressDefinitions.state_abbr[index],
// }))

// const DropdownExampleSearchSelectionTwo = () => (
//   <Dropdown placeholder='State' search selection options={stateOptions} />
// )

export default ChallengeDropdown