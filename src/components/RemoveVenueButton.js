import React from 'react'
import { withRouter } from 'react-router';
import * as actions from '../actions/index';
import { connect }  from 'react-redux';

class RemoveVenueButton extends React.Component {

    removeVenue = () => {
      console.log(this.props);
      const token = localStorage.jwt
      const venue = this.props.venue
      this.props.deleteVenueFromFavorites(token, venue)
    }

    render() {
      return(
        <a onClick={this.removeVenue}>Unfavorite {this.props.venue.name}</a>
      )
    }

  }


  const mapStateToProps = state => {
    return { currentUser: state.currentUser }
  }

  export default withRouter(connect(mapStateToProps, actions)(RemoveVenueButton))
