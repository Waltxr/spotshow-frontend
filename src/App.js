import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Auth from './components/Auth'
import FavoriteVenue from './components/FavoriteVenue'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/'component={ LoginForm } />
        <Route exact path='/dashboard' component={ Auth } />
        <Route exact path='/favorite-venues' component={FavoriteVenue} />
      </div>
    );
  }
}

export default App;
