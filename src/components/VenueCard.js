import React from 'react'
import { Card, Feed, Segment } from 'semantic-ui-react'
import VenueEvent from './VenueEvent'
import RemoveVenueButton from './RemoveVenueButton'


class VenueCard extends React.Component {



  grabVenueEvents = () => {
    return this.props.events.map((event, index) => {
      return (
        <VenueEvent name={event.attributes['display-name']} key={index} event={event}/>
      )
    })
  }

  render() {
    return(
      <Card>
        <Card.Content >
          <Card.Header inverted>
            {this.props.name}
          </Card.Header>
        </Card.Content>
        <Card.Content >
            <Segment.Group raise>
              <Segment >
                <Feed>
                  {this.grabVenueEvents()}
                </Feed>
              </Segment>
            </Segment.Group>

        </Card.Content>
        <Card.Content extra>
          <RemoveVenueButton venue={this.props.venue}/>
        </Card.Content>
      </Card>
    )
  }

}

export default VenueCard
