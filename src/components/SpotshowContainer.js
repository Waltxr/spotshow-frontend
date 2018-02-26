import React from 'react'
import { connect }  from 'react-redux';
import * as actions from '../actions/index';
import ShowList from './ShowList'

class SpotshowContainer extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser && nextProps.userEvents.length === 0) {
    const token = localStorage.jwt
    nextProps.getShowData(token)
    }
  }

  render() {
    return(
      <div>
        <ShowList events={this.props.userEvents}/>
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
