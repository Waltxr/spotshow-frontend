import React from 'react'
import { withRouter } from 'react-router';
import { Button } from 'semantic-ui-react';
import * as actions from '../actions/index';
import { connect }  from 'react-redux';

class LogOut extends React.Component {

  logOut = () => {
    this.props.logOutOfSpotify()
    this.props.history.push("/")
 }

 render() {
   return (
     <div>
       <Button onClick={this.logOut}>Log Out</Button>
     </div>
   )
 }

}

const mapStateToProps = state => {
  return { currentUser: state.currentUser };
};

export default withRouter(connect(mapStateToProps, actions)(LogOut));
