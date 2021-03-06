import React from 'react'
import { connect }  from 'react-redux';
import * as actions from '../actions/index';
import ShowList from './ShowList'
import { Container, Header } from 'semantic-ui-react'
import Navbar from './Navbar'
import Footer from './Footer'
import UserInput from './UserInput'

class SpotshowContainer extends React.Component {


  dataPolling = (token, job_id) => {
    this.props.jobStatus(token, job_id)
    this.props.getUserData(token)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser && nextProps.userEvents.length === 0) {
      const token = localStorage.jwt
      const job_id = localStorage.job_id
      if (!this.timer) {
          this.timer = setInterval(() => this.dataPolling(token, job_id), 1000)
      }
    } else if (nextProps.backgroundJobStatus === "completed") {        
        clearInterval(this.timer)
    } else if (nextProps.userEvents.length > 0) {
        nextProps.toggleLoading()
    }
  }

  handleUserInput = (searchTerm) => {
    this.props.userSearch(searchTerm)
  }

  render() {
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
      backgroundJobStatus: state.backgroundJobStatus,
      dimmerActive: state.dimmerActive.dimmerActive
    }
  } else {
    return {
      currentUser: state.currentUser,
      userEvents: state.userEvents.filter(e => e.display_name.includes(state.searchInput)),
      favoriteVenues: state.favoriteVenues,
      searchInput: state.searchInput,
      backgroundJobStatus: state.backgroundJobStatus,
      dimmerActive: state.dimmerActive.dimmerActive
    }
  }
}

export default connect(mapStateToProps, actions)(SpotshowContainer);
