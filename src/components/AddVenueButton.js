import React from 'react'
import { withRouter } from 'react-router';
import * as actions from '../actions/index';
import { connect }  from 'react-redux';

class AddVenueButton extends React.Component {

    favoriteVenue = () => {
      const token = localStorage.jwt
      const venue = this.props.venue
      this.props.addVenueToFavorites(token, venue)
    }

    render() {
      return(
        <a onClick={this.favoriteVenue}>Favorite {this.props.venue.name}</a>
      )
    }

  }


  const mapStateToProps = state => {
    return { currentUser: state.currentUser }
  }

  export default withRouter(connect(mapStateToProps, actions)(AddVenueButton))
