import React from 'react'

class SpotshowContainer extends React.Component {


  componentDidMount() {
    this.getShowData()
  }

  getShowData = () => {
    debugger
    return fetch('http://localhost:3000/api/v1/events', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    })
    .then(res => res.json())
    .then(console.log)
  }


  render() {
    return(
      <div>we in container</div>
    )
  }
}

export default SpotshowContainer
