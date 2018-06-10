import React from 'react'
import { Feed, Icon } from 'semantic-ui-react'


class VenueEvent extends React.Component {

  render() {        
    return(
      <Feed.Event>
        <Feed.Content>
          <Feed.Summary as="a" href={this.props.event.uri} target="_blank">
            <Icon name="rocket" />
            {this.props.event.display_name}
          </Feed.Summary>
        </Feed.Content>
      </Feed.Event>
    )
  }

}

export default VenueEvent
