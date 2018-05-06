import React from 'react'
import { Container, Image, Menu } from 'semantic-ui-react'
import LogOut from './LogOut'
import { Link } from 'react-router-dom';
import { connect }  from 'react-redux';
import * as actions from '../actions/index';

class Navbar extends React.Component {


  render() {
    console.log(this.props);
    return(
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item header>
            <Image
              size='medium'
              src='/logo.png'
              style={{ marginRight: '1.5em' }}
            />
          </Menu.Item>
          <Menu.Item >{this.props.currentUser.username}</Menu.Item>
          <LogOut />
          <Menu.Item >
            <Link to="dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item >
            <Link to="favorite-venues">Favorite Venues</Link>
          </Menu.Item>
        </Container>
      </Menu>
    )
  }

}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, actions)(Navbar)
