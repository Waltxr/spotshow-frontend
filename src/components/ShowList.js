import React from 'react'
import ShowCard from './ShowCard'
import { Card } from 'semantic-ui-react'

class ShowList extends React.Component {

  getImageUrl = index => {
    return this.props.events[index].attributes.artists.find((artist) => {
      if (artist.image_url) {
        return artist.image_url
      }
    })
  }

  listAllArtists = index => {
    let a = []
     this.props.events[index].attributes.artists.map((artist) => {
      a.push(artist.name)
    })

    return a.join(",  ")
  }

  sortByDate = () => {    
    return this.props.events.sort(function(a, b){
      return new Date(a.attributes.date) - new Date(b.attributes.date)
    })
  }

  getShow = () => {
    return this.sortByDate()
    .map((event, index) => {
      return (
        <ShowCard
          key={event.id}
          name={event.attributes['display-name']}
          date={event.attributes.date}
          time={event.attributes.time}
          venue={event.attributes.venue}
          url={event.attributes.uri}
          artists={this.listAllArtists(index)}
          image={this.getImageUrl(index).image_url}
        />
      )
    })
  }

  render() {
    return (
      <Card.Group centered itemsPerRow={3}>{this.getShow()}</Card.Group>
    )
  }

}


export default ShowList
