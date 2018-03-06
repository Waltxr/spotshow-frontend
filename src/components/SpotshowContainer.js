import React from 'react'
import { connect }  from 'react-redux';
import * as actions from '../actions/index';
import ShowList from './ShowList'
import { Container, Header } from 'semantic-ui-react'
import Navbar from './Navbar'
import Footer from './Footer'



class SpotshowContainer extends React.Component {

  componentWillReceiveProps(nextProps) {
    console.log('next props')
    console.log(nextProps);
    if (nextProps.currentUser && nextProps.userEvents.length === 0) {
    const token = localStorage.jwt
    nextProps.getShowData(token)
    nextProps.getUserVenueFavorites(token)
    }
  }

  render() {
    console.log('container render')
    console.log(this.props);
    return(
      <div>
        <Navbar />
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
    favoriteVenues: state.favoriteVenues
  }
}

export default connect(mapStateToProps, actions)(SpotshowContainer);
