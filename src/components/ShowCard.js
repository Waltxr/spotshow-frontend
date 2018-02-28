import React from 'react'
import { Card, Image } from 'semantic-ui-react'

class ShowCard extends React.Component {

  render() {
    console.log(this.props)
    return(
      <Card>
       <Image src={this.props.image} />
       <Card.Content>
         <Card.Header>{this.props.artists}</Card.Header>
         <Card.Meta>{this.props.date}</Card.Meta>
         <Card.Description>{this.props.name}</Card.Description>
         <Card.Description>{this.props.time}</Card.Description>
         <Card.Description>{this.props.venue.name}</Card.Description>
       </Card.Content>
       <Card.Content extra>
         <a href={this.props.url} target="_blank">ticket link</a>
       </Card.Content>
     </Card>
    )
  }

}

export default ShowCard
