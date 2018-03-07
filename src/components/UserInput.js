import React from 'react'
import { Input, Segment } from 'semantic-ui-react'

class UserInput extends React.Component {

  onUserInput = (e) => {
    this.props.onChange(e.target.value)
  }

  render() {
    return(
      <Input
        icon={{ name: 'search', circular: true }}
        placeholder='Search...'
        onChange={this.onUserInput}        
      />
    )
   }

}

export default UserInput
