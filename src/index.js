import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';

const AppWithRouter = withRouter(App)
const store = configureStore()

const AppInRouter = () => (
  <Router>
    <AppWithRouter />
  </Router>
)

ReactDOM.render(
  <Provider store={store}>
    <AppInRouter />
  </Provider>,
document.getElementById('root')
);
