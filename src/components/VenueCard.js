import React from 'react'
import { Card } from 'semantic-ui-react'
import VenueEvent from './VenueEvent'


class VenueCard extends React.Component {

  grabVenueEvents = () => {
    return this.props.events.map((event) => {
      return (
        <VenueEvent name={event.display_name} />
      )
    })
  }

  render() {
    return(
      <Card>
        <Card.Content style={{ color: 'black' }}>
          {this.props.name}
          {this.grabVenueEvents()}
        </Card.Content>
      </Card>
    )
  }

}

export default VenueCard
