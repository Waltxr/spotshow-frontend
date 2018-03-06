import React from 'react'
import { connect }  from 'react-redux';
import * as actions from '../actions/index';
import ShowList from './ShowList'
import FavoriteVenuesList from './FavoriteVenuesList'
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment } from 'semantic-ui-react'
import Navbar from './Navbar'
import Footer from './Footer'



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
        <Container content style={{ marginTop: '7em', color: 'white', minHeight: '50vh' }}>
          <Header as='h1' style={{ color: 'white' }}>Your Upcoming Shows</Header>
          <ShowList events={this.props.userEvents}/>
        </Container>
        <Footer />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    userEvents: state.userEvents,
    favUserVenues: state.favUserVenues
  };
};

export default connect(mapStateToProps, actions)(SpotshowContainer);
