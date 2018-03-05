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

export function logOutOfSpotify() {
  return dispatch => {
    localStorage.clear()
    return {}
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

export function addVenueToFavorites(jwt, user_venue) {
  return (dispatch) => {
    return fetch('http://localhost:3000/api/v1/favorite_venues', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Token ${localStorage.getItem('jwt')}`
      },
      body: JSON.stringify({ jwt, user_venue })
    })
    .then(res => res.json())
    .then(userWithVenues => {
      dispatch({ type: 'FETCH_FAVORATE_VENUES', payload: userWithVenues})
    })
  }
}

export function getUserVenueFavorites(jwt) {
  return (dispatch) => {
    return fetch('http://localhost:3000/api/v1/get_favorite_venues', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Token ${localStorage.getItem('jwt')}`
      },
      body: JSON.stringify({ jwt })
    })
    .then(res => res.json())
    .then(favUserVenues => {      
      dispatch({ type: 'FETCH_FAVORATE_VENUES', payload: favUserVenues})
    })
  }
}
