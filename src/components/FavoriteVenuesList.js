import React from 'react'
import VenueCard from './VenueCard'
import { Card, Loader, Dimmer, Segment } from 'semantic-ui-react'


class FavoriteVenuesList extends React.Component {

  grabEvents = index => {
    return this.props.events.filter(event => event.venue.name === this.props.favoriteVenues[index].name)
  }

  getVenue = () => {
    return this.props.favoriteVenues.map((venue, index) => {
      return (
        <VenueCard
          name={venue.name}
          events={this.grabEvents(index)}
        />
      )
    })
  }


  render() {
    return(
      <Card.Group centered itemsPerRow={3}>{this.getVenue()}</Card.Group>
    )
  }
}

export default FavoriteVenuesList
