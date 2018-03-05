import React from 'react'
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment } from 'semantic-ui-react'
import LogOut from './LogOut'
import { Link } from 'react-router-dom';

class Navbar extends React.Component {


  render() {
    return(
      <Menu fixed='top' inverted>
        <Container>
          <Menu.Item as='a' header>
            <Image
              size='medium'
              src='/logo.png'
              style={{ marginRight: '1.5em' }}
            />
          </Menu.Item>
          <Menu.Item>{this.props.user}</Menu.Item>
          <Menu.Item>
            <Link to="dashboard">Dashboard</Link>
          </Menu.Item>
          <LogOut />
          <Menu.Item>
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

export default Navbar
