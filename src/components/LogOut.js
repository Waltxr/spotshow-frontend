import React from 'react'
import { withRouter } from 'react-router';
import { Menu } from 'semantic-ui-react';
import * as actions from '../actions/index';
import { connect }  from 'react-redux';

class LogOut extends React.Component {

  logOut = () => {
    this.props.logOutOfSpotify()
    this.props.history.push("/")
 }

 render() {
   return (
     <Menu.Item as='a' onClick={this.logOut}>Logout</Menu.Item>
   )
 }

}

const mapStateToProps = state => {
  return { currentUser: state.currentUser };
};

export default withRouter(connect(mapStateToProps, actions)(LogOut));
