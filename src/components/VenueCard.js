import React from 'react'
import { Card, Feed } from 'semantic-ui-react'
import VenueEvent from './VenueEvent'
import RemoveVenueButton from './RemoveVenueButton'


class VenueCard extends React.Component {



  grabVenueEvents = () => {
    return this.props.events.map((event) => {
      return (
        <VenueEvent name={event.display_name} />
      )
    })
  }

  render() {
    console.log(this.props);
    return(
      <Card>
        <Card.Content>
          <Card.Header>
            {this.props.name}
          </Card.Header>
        </Card.Content>
        <Card.Content >
          <Feed>
            {this.grabVenueEvents()}
          </Feed>
        </Card.Content>
        <Card.Content extra>
          <RemoveVenueButton venue={this.props.venue}/>
        </Card.Content>
      </Card>
    )
  }

}

export default VenueCard
