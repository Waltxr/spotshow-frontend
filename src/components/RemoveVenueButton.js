import React from 'react'
import { withRouter } from 'react-router';
import { Button } from 'semantic-ui-react';
import * as actions from '../actions/index';
import { connect }  from 'react-redux';

class RemoveVenueButton extends React.Component {

    removeVenue = () => {      
      const token = localStorage.jwt
      const venue = this.props.venue
      this.props.deleteVenueFromFavorites(token, venue)
    }

    render() {
      return(
        <a onClick={this.removeVenue}>Remove this venue</a>
      )
    }

  }


  const mapStateToProps = state => {
    return { currentUser: state.currentUser }
  }

  export default withRouter(connect(mapStateToProps, actions)(RemoveVenueButton))
