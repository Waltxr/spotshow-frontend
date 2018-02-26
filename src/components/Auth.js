import React from 'react'
import SpotshowContainer from './SpotshowContainer'

class Auth extends React.Component {

  loginToSpotify = (code, history) => {
    return fetch('http://localhost:3000/api/v1/dashboard', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ code })
    })
    .then(res => res.json())
    .then( currentUser => {
      localStorage.setItem("jwt", currentUser.code)
    })
  }

  componentDidMount() {
    const location = this.props.location.search
    const history = this.props.history
    if (location.includes('code')) {
      const code = location.slice(6)
      this.loginToSpotify(code, history)
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

export default Auth
