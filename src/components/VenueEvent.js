import React from 'react'
import { Feed} from 'semantic-ui-react'


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
