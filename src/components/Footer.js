import React from 'react'
import { Container, Divider, Image, List, Segment } from 'semantic-ui-react'

class Footer extends React.Component {

  render() {
    return(
      <Segment
        inverted
        vertical
        style={{ margin: '5em 0em 0em', padding: '5em 0em' }}
      >
        <Container textAlign='center'>

          <Divider inverted section />
          <Image
            centered
            size='small'
            src='/logo.png'
          />
          <List horizontal inverted divided link>
            <List.Item as='a' href='mailto:me@adamiwalter.com' target='_blank'>Contact Us</List.Item>
            <List.Item as='a' href='http://www.adamiwalter.com' target='_blank'>Built by Adam I Walter</List.Item>
            <List.Item as='a' href='https://www.songkick.com/developer' target='_blank'>Songkick API</List.Item>
            <List.Item as='a' href='https://developer.spotify.com/web-api/' target='_blank'>Spotify API</List.Item>
          </List>
        </Container>
      </Segment>
    )
  }
}

export default Footer
