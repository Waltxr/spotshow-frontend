import React from 'react'
import { Card, Image, Button} from 'semantic-ui-react'
import * as actions from '../actions/index';
import FavoriteVenue from './FavoriteVenue'
import Time from 'react-time-format'


class ShowCard extends React.Component {

  render() {

    let time = new Date(this.props.time)

    return(
      <Card>
       <Image src={this.props.image} />
       <Card.Content>
         <Card.Header>{this.props.artists}</Card.Header>
         <Card.Meta>{this.props.date}</Card.Meta>
         <Card.Description>{this.props.name}</Card.Description>
         <Card.Description>
           <Time value={time} format="hh:mm" />
         </Card.Description>
         <Card.Description>{this.props.venue.name}</Card.Description>
       </Card.Content>
       <Card.Content extra>
         <a href={this.props.url} target="_blank">ticket link</a>
         <FavoriteVenue venue={this.props.venue}/>
       </Card.Content>
     </Card>
    )
  }

}

export default ShowCard
