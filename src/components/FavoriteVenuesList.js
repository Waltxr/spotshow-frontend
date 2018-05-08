import React from 'react'
import VenueCard from './VenueCard'
import { Card } from 'semantic-ui-react'


class FavoriteVenuesList extends React.Component {

  grabEvents = index => {
    return this.props.events.filter(event => event.attributes.venue.name === this.props.favoriteVenues[index].name)
  }

  getVenue = () => {
    return this.props.favoriteVenues.map((venue, index) => {
      return (
        <VenueCard
          key={index}
          venue={venue}
          name={venue.name}
          events={this.grabEvents(index)}
        />
      )
    })
  }


  render() {
    return(
      <Card.Group centered itemsPerRow={1}>{this.getVenue()}</Card.Group>
    )
  }
}

export default FavoriteVenuesList
