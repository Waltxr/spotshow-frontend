import React from 'react'
import { Feed, Icon } from 'semantic-ui-react'


class VenueEvent extends React.Component {

  render() {
    console.log(this.props);
    return(
      <Feed.Event>
        <Feed.Content>
          <Feed.Summary>
            <Icon name="rocket" />
            {this.props.name}
          </Feed.Summary>
        </Feed.Content>
      </Feed.Event>
    )
  }

}

export default VenueEvent
