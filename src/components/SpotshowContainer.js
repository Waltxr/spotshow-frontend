import React from 'react'
import { connect }  from 'react-redux';
import * as actions from '../actions/index';
import ShowList from './ShowList'
import { Container, Header } from 'semantic-ui-react'
import Navbar from './Navbar'
import Footer from './Footer'
import UserInput from './UserInput'



class SpotshowContainer extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser && nextProps.userEvents.length === 0) {
    const token = localStorage.jwt
    nextProps.getUserData(token)
    const job_id = localStorage.job_id
    nextProps.jobStatus(token, job_id)
    setTimeout(() => {
        nextProps.toggleLoading()
    }, 3000)

    }
  }

  handleUserInput = (searchTerm) => {
    this.props.userSearch(searchTerm)
  }

  render() {
    console.log(this.props);
    return(
      <div>
        <Navbar />
        <Container style={{ marginTop: '8em', color: 'white' }}>
          <Header floated="left" as='h1'  style={{ color: 'white' }}>Your Upcoming Shows</Header>
          <UserInput onChange={this.handleUserInput}/>
        </Container>
        <Container style={{ marginTop: '3em', color: 'white', minHeight: '75vh' }}>
          <ShowList events={this.props.userEvents} searchInput={this.props.searchInput}/>
        </Container>
        <Footer />
      </div>
    )
  }

}

function mapStateToProps(state) {
  if (state.searchInput.searchInput === "") {
    return {
      currentUser: state.currentUser,
      userEvents: state.userEvents,
      favoriteVenues: state.favoriteVenues,
      searchInput: state.searchInput,
      backgroundJobStatus: state.backgroundJobStatus
    }
  } else {
    return {
      currentUser: state.currentUser,
      userEvents: state.userEvents.filter(e => e.display_name.includes(state.searchInput)),
      favoriteVenues: state.favoriteVenues,
      searchInput: state.searchInput,
      backgroundJobStatus: state.backgroundJobStatus
    }
  }
}

export default connect(mapStateToProps, actions)(SpotshowContainer);
