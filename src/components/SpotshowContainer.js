import React from 'react'
import { connect }  from 'react-redux';
import * as actions from '../actions/index';
import ShowList from './ShowList'
import FavoriteVenuesList from './FavoriteVenuesList'
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment } from 'semantic-ui-react'
import Navbar from './Navbar'



class SpotshowContainer extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser && nextProps.userEvents.length === 0) {
    const token = localStorage.jwt
    nextProps.getShowData(token)
    nextProps.getUserVenueFavorites(token)
    }
  }

  render() {
    return(
      <div>
      <Navbar user={this.props.currentUser.username}/>
      <Container content style={{ marginTop: '7em', color: 'white' }}>
        <Header as='h1' style={{ color: 'white' }}>Your Upcoming Shows</Header>
        <ShowList events={this.props.userEvents}/>
      </Container>

      <Segment
        inverted
        vertical
        style={{ margin: '5em 0em 0em', padding: '5em 0em' }}
      >
        <Container textAlign='center'>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='Group 1' />
                <List link inverted>
                  <List.Item as='a'>Link One</List.Item>
                  <List.Item as='a'>Link Two</List.Item>
                  <List.Item as='a'>Link Three</List.Item>
                  <List.Item as='a'>Link Four</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='Group 2' />
                <List link inverted>
                  <List.Item as='a'>Link One</List.Item>
                  <List.Item as='a'>Link Two</List.Item>
                  <List.Item as='a'>Link Three</List.Item>
                  <List.Item as='a'>Link Four</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='Group 3' />
                <List link inverted>
                  <List.Item as='a'>Link One</List.Item>
                  <List.Item as='a'>Link Two</List.Item>
                  <List.Item as='a'>Link Three</List.Item>
                  <List.Item as='a'>Link Four</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as='h4' content='Footer Header' />
                <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>

          <Divider inverted section />
          <Image
            centered
            size='small'
            src='/logo.png'
          />
          <List horizontal inverted divided link>
            <List.Item as='a' href='#'>Site Map</List.Item>
            <List.Item as='a' href='#'>Contact Us</List.Item>
            <List.Item as='a' href='#'>Terms and Conditions</List.Item>
            <List.Item as='a' href='#'>Privacy Policy</List.Item>
          </List>
        </Container>
      </Segment>
    </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    userEvents: state.userEvents
  };
};

export default connect(mapStateToProps, actions)(SpotshowContainer);
