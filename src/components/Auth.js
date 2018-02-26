import React from 'react'
import { connect }  from 'react-redux';
import * as actions from '../actions/index';
import SpotshowContainer from './SpotshowContainer'

class Auth extends React.Component {

  componentDidMount() {
    const location = this.props.location.search
    const history = this.props.history
    if (location.includes('code')) {
      const code = location.slice(6)
      this.props.loginToSpotify(code, history)
      history.push("/dashboard")
    }
  }

  render() {
    return(
      <div>
        <SpotshowContainer />
      </div>
    )
  }
}

export default connect(() => ({}), actions)(Auth);
