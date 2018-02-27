export function loginToSpotify(code, history) {
  return (dispatch) => {
    return fetch('http://localhost:3000/api/v1/dashboard', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ code })
    })
    .then(res => res.json())
    .then( user => {
      localStorage.setItem("jwt", user.code)
            dispatch({ type: 'LOGIN_USER', payload: user.currentUser })
    })
  }
}

export function getShowData(jwt) {
  return (dispatch) => {
    return fetch('http://localhost:3000/api/v1/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Token ${localStorage.getItem('jwt')}`
      },
      body: JSON.stringify({ jwt })
    })
    .then(res => res.json())
    .then( eventsList => {
      dispatch({ type: 'FETCH_EVENTS', payload: eventsList.userEvents})
    })
  }
}
