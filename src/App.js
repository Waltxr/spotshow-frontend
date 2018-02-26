import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Login from './components/Login'
import Auth from './components/Auth'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/'component={ Login } />
        <Route exact path='/dashboard' component={ Auth } />
      </div>
    );
  }
}

export default App;
