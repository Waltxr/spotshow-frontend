import React from 'react'
import { Feed, Icon } from 'semantic-ui-react'


class VenueEvent extends React.Component {

  render() {    
    return(
      <Feed.Event>
        <Feed.Content>
          <Feed.Summary as="a" href={this.props.event.attributes.uri} target="_blank">
            <Icon name="rocket" />
            {this.props.name}
          </Feed.Summary>
        </Feed.Content>
      </Feed.Event>
    )
  }

}

export default VenueEvent
