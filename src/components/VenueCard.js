import React from 'react'
import { Card, Button} from 'semantic-ui-react'
import * as actions from '../actions/index';
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
    console.log("VenueCard Render")
    console.log(this.props)
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
