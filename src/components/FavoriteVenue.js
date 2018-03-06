import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import * as actions from '../actions/index';
import { connect }  from 'react-redux';
import Navbar from './Navbar'
import Footer from './Footer'
import FavoriteVenuesList from './FavoriteVenuesList'

class FavoriteVenue extends React.Component {

  componentDidMount() {    
    const token = localStorage.jwt
    this.props.getShowData(token)
    this.props.getUserVenueFavorites(token)
  }

  render() {
    console.log('FavVenue');
    console.log(this.props);
    return (
      <div>
        <Navbar />
        <Container content style={{ marginTop: '7em', color: 'white', minHeight: '50vh'}}>
          <Header as='h1' style={{ color: 'white' }}>Your Favorite Venues</Header>
          <FavoriteVenuesList events={this.props.userEvents} favoriteVenues={this.props.favoriteVenues}/>
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
    favoriteVenues: state.favoriteVenues
  };
};

export default connect(mapStateToProps, actions)(FavoriteVenue)
