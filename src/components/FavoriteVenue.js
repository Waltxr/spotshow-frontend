import React from 'react'
import { withRouter } from 'react-router';
import { Button } from 'semantic-ui-react';
import * as actions from '../actions/index';
import { connect }  from 'react-redux';
import Navbar from './Navbar'

class FavoriteVenue extends React.Component {

  componentDidMount() {
    console.log(this.props)
  }

  favoriteVenue = () => {
    const token = localStorage.jwt
    const venue = this.props.venue
    this.props.addVenueToFavorites(token, venue)
  }

  render() {
    return (
      <div>
        <Navbar />
      </div>
    )
  }

}

const mapStateToProps = state => {
  return { currentUser:state.CurrentUser }
}

export default withRouter(connect(mapStateToProps, actions)(FavoriteVenue))
