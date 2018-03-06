import React from 'react'
import { Card, Button, Feed} from 'semantic-ui-react'
import * as actions from '../actions/index';


class VenueEvent extends React.Component {

  render() {
    return(
      <Feed.Event>
          {this.props.name}
      </Feed.Event>
    )
  }

}

export default VenueEvent
