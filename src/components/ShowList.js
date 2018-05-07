import React from 'react'
import ShowCard from './ShowCard'
import { connect }  from 'react-redux';
import * as actions from '../actions/index';
import { Card } from 'semantic-ui-react'
import { Dimmer, Loader, } from 'semantic-ui-react'

class ShowList extends React.Component {

  getImageUrl = index => {
    return this.props.events[index].artists.find((artist) => {
      if (artist.image_url) {
        return artist.image_url
      }
    })
  }

  listAllArtists = index => {
    let a = []
     this.props.events[index].artists.map((artist) => {
      a.push(artist.name)
    })

    return a.join(",  ")
  }

  sortByDate = () => {
    return this.props.events.sort(function(a, b){
      return new Date(a.date) - new Date(b.date)
    })
  }

  getShow = () => {
    return this.sortByDate()
    .map((event, index) => {
      return (
        <ShowCard
          key={event.id}
          name={event['display-name']}
          date={event.date}
          time={event.time}
          venue={event.venue}
          url={event.uri}
          artists={this.listAllArtists(index)}
          image={this.getImageUrl(index).image_url}
        />
      )
    })
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Dimmer active={this.props.dimmerActive}>
          <Loader indeterminate>Finding some shows for you...</Loader>
        </Dimmer>
        <Card.Group centered itemsPerRow={3}>{this.getShow()}</Card.Group>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    dimmerActive: state.dimmerActive
  }
}


export default connect(mapStateToProps, actions)(ShowList);
