import React from 'react'
import { Container, Dropdown, Image, Menu } from 'semantic-ui-react'
import LogOut from './LogOut'
import { Link } from 'react-router-dom';
import { connect }  from 'react-redux';
import * as actions from '../actions/index';

class Navbar extends React.Component {


  render() {    
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
          <Menu.Item as="a">
            <Link to="dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item as="a">
            <Link to="favorite-venues">Favorite Venues</Link>
          </Menu.Item>
          <Dropdown item simple text='Dropdown'>
            <Dropdown.Menu>
              <Dropdown.Item>List Item</Dropdown.Item>
              <Dropdown.Item>List Item</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Header>Header Item</Dropdown.Header>
              <Dropdown.Item>
                <i className='dropdown icon' />
                <span className='text'>Submenu</span>
                <Dropdown.Menu>
                  <Dropdown.Item>List Item</Dropdown.Item>
                  <Dropdown.Item>List Item</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Item>
              <Dropdown.Item>List Item</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
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
